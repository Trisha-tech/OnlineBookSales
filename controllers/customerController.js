const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");
const Customer = require("../models/customerSchema.js");
const Feedback = require("../models/feebackSchema.js");
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/errorHandler.js");
const sendEmail = require("../utils/sendEmail");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const validator = require("validator");
const disposableEmailDomains = require("disposable-email-domains");

// CUSTOMER REGISTRATION ROUTE
exports.registerCustomer = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return next(new ErrorHandler("Please fill all the required fields", 400));
  }

  // Validate email format
  if (!validator.isEmail(email)) {
    return next(new ErrorHandler("Invalid email address", 400));
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

  // Generate token
  const token = customer.getJWTToken();

  res.status(200).json({
    success: true,
    token,
  });
});

// CUSTOMER FORGOT PASSWORD ROUTE
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
  const { email } = req.body;

  if (!email) {
    return next(new ErrorHandler("Please provide an email address", 400));
  }

  const customer = await Customer.findOne({ email });

  if (!customer) {
    return next(new ErrorHandler("Customer not found", 404));
  }

  // Generate reset token
  const resetToken = customer.getResetPasswordToken();

  await customer.save({ validateBeforeSave: false });

  const resetUrl = `${process.env.FRONTEND_URL}/password/reset/${resetToken}`;
  console.log("Reset URL:", resetUrl);

  const message = `Your password reset token is as follows:\n\n${resetUrl}\n\nIf you have not requested this email, please ignore it.`;

  try {
    await sendEmail({
      email: customer.email,
      subject: "Password Recovery",
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to: ${customer.email}`,
    });
  } catch (error) {
    customer.resetPasswordToken = undefined;
    customer.resetPasswordExpire = undefined;

    await customer.save({ validateBeforeSave: false });

    return next(new ErrorHandler("Email could not be sent", 500));
  }
});

// CUSTOMER RESET PASSWORD ROUTE
exports.resetPassword = catchAsyncErrors(async (req, res, next) => {
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const customer = await Customer.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!customer) {
    return next(new ErrorHandler("Invalid or expired reset token", 400));
  }

  // Set new password
  customer.password = req.body.password;
  customer.resetPasswordToken = undefined;
  customer.resetPasswordExpire = undefined;

  await customer.save();
  console.log("Password updated for user:", customer.email); // Debugging line

  res.status(200).json({
    success: true,
    message: "Password updated successfully",
  });
});

// CUSTOMER LOGOUT ROUTE
exports.logoutCustomer = catchAsyncErrors(async (req, res, next) => {
  const customer = await Customer.findById(req.user.id);

  if (!customer) {
    return next(new ErrorHandler("Invalid logout request", 401));
  }

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res.status(200).clearCookie("token", options).json({
    success: true,
  });
});

// GET CUSTOMER DETAIL
exports.getCustomerDetails = catchAsyncErrors(async (req, res, next) => {
  const customer = await Customer.findById(req.user.id);

  if (!customer) {
    return next(new ErrorHandler("Customer not found", 404));
  }

  res.status(200).json({
    success: true,
    customer,
  });
});

// UPDATE CUSTOMER PASSWORD
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const customer = await Customer.findById(req.user.id).select("+password");

  const isMatch = await bcrypt.compare(req.body.oldPassword, customer.password);
  if (!isMatch) {
    return next(new ErrorHandler("Old password is incorrect", 400));
  }

  customer.password = req.body.newPassword;
  await customer.save();

  res.status(200).json({
    success: true,
    message: "Password updated successfully",
  });
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
    customer,
  });
});

// ADD FEEDBACK
exports.addFeedback = catchAsyncErrors(async (req, res, next) => {
  const { feedback, topic } = req.body;
  const newFeedback = await Feedback.create({
    feedback,
    topic,
    user: req.user._id,
  });

  try {
    // Uncomment the line below if you want to implement sending email to admin
    // sendMailToAdmin(newFeedback);
    res.status(200).json({
      success: true,
      newFeedback,
    });
  } catch (error) {
    await newFeedback.delete();
    console.error("Error occurred during feedback creation:", error);
    next(error);
  }
});

const sendMailToAdmin = async (newFeedback) => {
  const transporter = nodemailer.createTransport({
    service: process.env.SMTP_SERVICE,
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

  await transporter.sendMail(mailOptions);
};
