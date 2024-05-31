const ErrorHandler = require("../utils/errorHandler.js");
const catchAsyncErrors = require("./catchAsyncErrors");
const jwt = require("jsonwebtoken");
const Customer = require("../models/customerSchema.js");



exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  // Retrieve token from Authorization header
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return next(new ErrorHandler("Please Login to access this resource", 401));
  }

  // Verify token
  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  // Find user by ID
  req.user = await Customer.findById(decodedData.id);
  

  if (!req.user) {
    return next(new ErrorHandler("User not found", 404));
  }

  next();
});


exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorHandler(
          `Role: ${req.user.role} is not allowed to access this resouce `,
          403
        )
      );
    }

    next();
  };
};
