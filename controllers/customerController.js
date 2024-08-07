const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");
const Customer = require("../models/customerSchema.js");
const Feedback = require("../models/feebackSchema.js");
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/errorHandler.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();
// CUSTOMER REGISTRATION ROUTE
const validator = require('validator');
const disposableEmailDomains = require('disposable-email-domains');


exports.registerCustomer = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  try {
    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: 'Invalid email address' });
    }

    // Check if email domain is disposable
    const domain = email.split('@')[1];
    if (disposableEmailDomains.includes(domain)) {
      return res.status(400).json({ error: 'Disposable email addresses are not allowed' });
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

    sendToken(customer, 201, res);
    const refreshToken = jwt.sign({ id: customer._id }, process.env.REFRESH_TOKEN_SECRET);

    if (customer) {
      await Customer.findByIdAndUpdate(customer._id, { refreshToken });
    }



    // Access JWT secret key from environment variables
    const jwtSecret = process.env.JWT_SECRET;

    // Check if jwtSecret is defined
    if (!jwtSecret) {
      console.error("JWT secret key is not defined in the environment variables.");
      process.exit(1); // Terminate the application
    }

    // Print the user detail
    const payload = {
      name,
      email,
    };

    const token = jwt.sign(payload, jwtSecret);
    sendToken(customer, 201, res);

    const options = {
      expires: new Date(Date.now() + process.env.REFRESH_TOKEN_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.status(201).cookie('refreshToken', refreshToken, options).json({
      success: true,
      refreshToken,
      customer,
    });;

  } catch (error) {
    console.error("Error occurred during user registration:", error);
    next(error); // Pass the error to the error handling middleware
  }
});



// CUSTOMER LOGIN ROUTE
exports.loginCustomer = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please Enter Email & Password", 400));
  }

  const customer = await Customer.findOne({ email }).select("+password");

  if (!customer) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  const isPasswordMatched = await customer.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email or password", 401));
  }

  sendToken(customer, 200, res);
  const refreshToken = jwt.sign({ id: customer._id }, process.env.REFRESH_TOKEN_SECRET);

  if (customer) {
    await Customer.findByIdAndUpdate(customer._id, { refreshToken });
  }

  const options = {
    expires: new Date(Date.now() + process.env.REFRESH_TOKEN_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(200).cookie('refreshToken', refreshToken, options).json({
    success: true,
    refreshToken,
    customer,
  });
});

//CUSTOMER LOGOUT ROUTE
exports.logoutCustomer = catchAsyncErrors(async (req, res, next) => {
  const customer = await Customer.findById(req.user.id);

  if (!customer) {
    return next(new ErrorHandler("Invalid logout request", 401));
  }
  const updatedCustomer = await Customer.findOneAndUpdate(
    { _id: req.user.id },
    { refreshToken: null },
    { new: true }
  );
  const options = {
    httpOnly: true,
    secure: true
  }

  return res.status(200)
    .clearCookie("token", options)
    .clearCookie("refreshToken", options)
    .json({
      success: true
    })

})
    
  


// GET CUSTOMER DETAIL
exports.getCustomerDetails = catchAsyncErrors(async (req, res, next) => {
  const customer = await Customer.findById(req.user.id);

  res.status(200).json({
    success: true,
    customer,
  });
});

// UPDATE CUSTOMER PASSWORD
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const customer = await Customer.findById(req.user.id).select("+password");

  const isPasswordMatched = await customer.comparePassword(
    req.body.oldPassword
  );

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHandler("Password does not match", 400));
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

  res.status(200).json({
    success: true,
  });
});


exports.addFeedback = catchAsyncErrors(async (req, res, next) => {
  const { feedback,topic } = req.body;
  const newFeedback = await Feedback.create({
    feedback,
    topic,
    user: req.body.user._id,
  });
  try{
   // sendMailToAdmin(newFeedback);
    res.status(200).json({
      success: true,
      newFeedback,
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
    to: 'admin email',
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
      return next(new ErrorHandler("Invalid refresh token", 401));
    }

    const accessToken = customer.getJWTToken(); 

    const newRefreshToken = jwt.sign({ id: customer._id }, process.env.REFRESH_TOKEN_SECRET);

    const updatedCustomer =await Customer.findByIdAndUpdate(customer._id,{refreshTOken:newRefreshToken})
    
    const accessTokenOptions = {
      expires: new Date(Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    const refreshTokenOptions = {
      expires: new Date(Date.now() + process.env.REFRESH_TOKEN_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    res.cookie('accessToken', accessToken, accessTokenOptions);
    res.cookie('refreshToken', newRefreshToken, refreshTokenOptions);

    res.status(200).json({
      success: true,
      accessToken,
      refreshToken
    });
  } catch (error) {
    return next(new ErrorHandler("Invalid refresh token", 401));
  }
});