const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");
const Customer = require("../models/customerSchema.js");
const Feedback = require("../models/feebackSchema.js");
const sendToken = require("../utils/jwtToken");
const errorHandler = require("../utils/errorHandler");
const responseHandler = require("../utils/responseHandler");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const validator = require("validator");
const disposableEmailDomains = require("disposable-email-domains");

exports.registerCustomer = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // Validate email format
    if (!validator.isEmail(email)) {
      return res
        .status(400) // Changed to 400 for bad request
        .send(
          errorHandler(
            404,
            "Invalid request",
            "Please provide a valid email id"
          )
        );
    }

    // Check if email domain is disposable
    const domain = email.split("@")[1];
    if (disposableEmailDomains.includes(domain)) {
      return res
        .status(404)
        .send(
          errorHandler(
            404,
            "Invalid request",
            "Disposable email addresses are not allowed"
          )
        );
    }

    const customer = await Customer.create({
      name,
      email,
      password,
      avatar: {
        public_id: "This is Public ID",
        url: "ThisisSecureUrl",
      },
    });

    // sendToken(customer, 201, res);
    const refreshToken = jwt.sign(
      { id: customer._id },
      process.env.REFRESH_TOKEN_SECRET
    );

    if (customer) {
      await Customer.findByIdAndUpdate(customer._id, { refreshToken });
    }

    // Access JWT secret key from environment variables
    const jwtSecret = process.env.JWT_SECRET;

    // Check if jwtSecret is defined
    if (!jwtSecret) {
      console.error(
        "JWT secret key is not defined in the environment variables."
      );
      process.exit(1); // Terminate the application
    }

    // Print the user detail
    const payload = {
      name,
      email,
    };

    const token = jwt.sign(payload, jwtSecret);
    // sendToken(customer, 201, res);

    const options = {
      expires: new Date(
        Date.now() +
          process.env.REFRESH_TOKEN_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    // Send response with customer and tokens
    res.status(201).cookie("refreshToken", refreshToken, options).json({
      success: true,
      refreshToken,
      customer :{
        name: customer.name,
        email: customer.email,
        avatar: customer.avatar,
        role: customer.role,
          _id: customer._id,
        createdAt: customer.createdAt,
      },
      token,
    });
  } catch (error) {
    console.error("Error occurred during user registration:", error);
    next(error); // Pass the error to the error handling middleware
  }
});

// CUSTOMER LOGIN ROUTE
exports.loginCustomer = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(404)
      .send(
        errorHandler(
          404,
          "Missing Parameters",
          "Please enter email and password"
        )
      );
  }

  const customer = await Customer.findOne({ email }).select("+password");

  if (!customer) {
    return res
      .status(404)
      .send(
        errorHandler(
          404,
          "Invalid Request",
          "Please enter valid email and password"
        )
      );
  }

  const isPasswordMatched = await customer.comparePassword(password);

  if (!isPasswordMatched) {
    return res
      .status(404)
      .send(errorHandler(404, "Bad Request", "Please enter valid password"));
  }

  sendToken(customer, 200, res);
  const refreshToken = jwt.sign(
    { id: customer._id },
    process.env.REFRESH_TOKEN_SECRET
  );

  if (customer) {
    await Customer.findByIdAndUpdate(customer._id, { refreshToken });
  }

  const options = {
    expires: new Date(
      Date.now() + process.env.REFRESH_TOKEN_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(200).cookie("refreshToken", refreshToken, options).json({
    success: true,
    refreshToken,
    customer,
  });
});

//CUSTOMER LOGOUT ROUTE
exports.logoutCustomer = catchAsyncErrors(async (req, res, next) => {
  const customer = await Customer.findById(req.user.id);

  if (!customer) {
    return res
      .status(404)
      .send(errorHandler(404, "Bad Request", "Customer does not exists"));
  }
  const updatedCustomer = await Customer.findOneAndUpdate(
    { _id: req.user.id },
    { refreshToken: null },
    { new: true }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("token", options)
    .clearCookie("refreshToken", options)
    .json({
      success: true,
    });
});

// GET CUSTOMER DETAIL
exports.getCustomerDetails = catchAsyncErrors(async (req, res, next) => {
  const customer = await Customer.findById(req.user.id);

  return res.status(200).send({
    response: {
      data: { customer },
      title: "Customer Fetched",
      message: "Customer Fetched Successfully!",
      status: 200,
    },
    errors: {},
  });
});

// UPDATE CUSTOMER PASSWORD
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const customer = await Customer.findById(req.user.id).select("+password");

  const isPasswordMatched = await customer.comparePassword(
    req.body.oldPassword
  );

  if (!isPasswordMatched) {
    return res
      .status(404)
      .send(
        errorHandler(404, "Bad Request", "Please enter the correct password")
      );
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return res
      .status(404)
      .send(errorHandler(404, "Bad Request", "Password do not match"));
  }

  customer.password = req.body.newPassword;

  await customer.save();

  sendToken(customer, 200, res);
});

// UPDATE CUSTOMER PROFILE
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
  const newCustomerData = {
    name: req.body.name,
    email: req.body.email,
  };

  const customer = await Customer.findByIdAndUpdate(
    req.user.id,
    newCustomerData,
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  return res.status(200).send({
    response: {
      data: {},
      title: "Profile Updated",
      message: "Customer's Profile Updated Successfully!",
      status: 200,
    },
    errors: {},
  });
});


// Move the resetPassword function outside and export it
exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  if (!newPassword) {
    return res.status(400).json({ error: "New password is required." });
  }

  try {
    const saltRounds = 10; // You might want to ensure this value is defined
    const hashedPassword = await bcrypt.hash(newPassword, saltRounds);  // Hash new password

    const updatedUser = await Customer.findOneAndUpdate(
      { email },  // Find user by email
      { $set: { password: hashedPassword } },  // Set new hashed password
      { new: true }
    );

    if (updatedUser) {
      return res.json({ message: "Password updated successfully." });
    } else {
      return res.status(404).json({ error: "User not found." });
    }
  } catch (error) {
    console.error("Error updating password:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


exports.addFeedback = catchAsyncErrors(async (req, res, next) => {
  const { feedback, topic } = req.body;
  const newFeedback = await Feedback.create({
    feedback,
    topic,
    user: req.body.user._id,
  });
  try {
    // sendMailToAdmin(newFeedback);
    return res.status(200).send({
      response: {
        data: { newFeedback },
        title: "Feedback Added",
        message: "Feedback Added Successfully!",
        status: 200,
      },
      errors: {},
    });
  } catch (error) {
    newFeedback.delete();
    console.error("Error occurred during feedback creation:", error);
    next(error);
  }
});
sendMailToAdmin = async (newFeedback) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  const mailOptions = {
    from: process.env.SMTP_EMAIL,
    to: "admin email",
    subject: "New Feedback",
    text: `New Feedback received from ${newFeedback.user}`,
  };
};

exports.exchangeToken = catchAsyncErrors(async (req, res, next) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return next(new ErrorHandler("Refresh token is required", 400));
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
    const customer = await Customer.findById(decoded.id);

    if (!customer || customer.refreshToken !== refreshToken) {
      return res
        .status(401)
        .send(errorHandler(401, "Invalid Request", "Invalid Refresh Token"));
    }

    const accessToken = customer.getJWTToken();

    const newRefreshToken = jwt.sign(
      { id: customer._id },
      process.env.REFRESH_TOKEN_SECRET
    );

    const updatedCustomer = await Customer.findByIdAndUpdate(customer._id, {
      refreshTOken: newRefreshToken,
    });

    const accessTokenOptions = {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    const refreshTokenOptions = {
      expires: new Date(
        Date.now() +
          process.env.REFRESH_TOKEN_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    res.cookie("accessToken", accessToken, accessTokenOptions);
    res.cookie("refreshToken", newRefreshToken, refreshTokenOptions);

    return res.status(200).send({
      response: {
        data: { accessToken, refreshToken },
        title: "Tokens Fetched",
        message: "Tokens Fetched Successfully!",
        status: 200,
      },
      errors: {},
    });
  } catch (error) {
    return res
      .status(401)
      .send(errorHandler(401, "Invalid Request", "Invalid Refresh Token"));
  }
});
