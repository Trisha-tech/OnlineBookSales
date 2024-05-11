const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");
const Customer = require("../models/customerSchema.js");
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/errorHandler.js");

// CUSTOMER REGISTRATION ROUTE
exports.registerCustomer = catchAsyncErrors(async (req, res, next) => {
  
    const { name, email, password, phone, address } = req.body;
  
    const customer = await Customer.create({
      name,
      email,
      password,
      phone,
      address,
      avatar: {
        public_id: "This is Public ID",
        url: "ThisisSecureUrl"
      },
    });
    
    sendToken(customer, 201, res);
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
  });
  


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
  
    const isPasswordMatched = await customer.comparePassword(req.body.oldPassword);
  
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

  const customer = await Customer.findByIdAndUpdate(req.user.id, newCustomerData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

