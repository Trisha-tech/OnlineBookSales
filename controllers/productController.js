const Product = require("../models/productSchema.js");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");
const ErrorHandler=require("../utils/errorHandler.js")

// CREATE PRODUCT

exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  console.log("here i am at createProduct");
  console.log(req.body);

  try {
    // Create product with request body data
    const productData = { ...req.body };

    // Associate product with the user if user is available
    if (req.user) {
      productData.user = req.user._id;
    } else {
      // Handle the case where user is required but not provided
      return res.status(400).json({
        success: false,
        message: 'User is required to create a product.',
      });
    }

    // Add image and shareable link if provided
    if (req.body.image) {
      productData.images = req.body.image;
      productData.shareableLink = req.body.image.url;
    }

    // Save the product
    const product = await Product.create(productData);

    // Send success response
    res.status(201).json({
      success: true,
      product,
    });

  } catch (error) {
    // Log the error and pass it to the next middleware
    console.log(error);
    next(error);
  }
});





  

  // GET ALL PRODUCTS (ADMIN)
exports.getAdminProducts = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.find();

  res.status(200).json({
    success: true,
    products,
  });
});

// GET PRODUCT DETAILS
exports.getProductDetails = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});



// UPDATE PRODUCT -- ADMIN

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {
  let product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHandler("Product not found", 404));
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    product,
  });
});


// DELETE PRODUCT

exports.deleteProduct = catchAsyncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "Product Deleted Successfully",
  });
});



// Search Product 

exports.searchProduct = catchAsyncErrors(async (req, res, next) => {
  const products = await Product.findById(req.params.id);

  if(!products){
    return next(new ErrorHandler("Product not found", 404));
  }
  res.status(200).json({
    success:true,
    products
  });
});

// Filter Product

exports.filterProduct = catchAsyncErrors(async (req, res, next) => {
  const { category, numOfReviews } = req.body;
  if(!category || !numOfReviews){
    return next(new ErrorHandler("Please select either category or numOfReviews", 404)); 
    }

    let filterCriteria = {}
    if(category){
      filterCriteria.category = category
    }else if(numOfReviews){
      filterCriteria.numOfReviews=numOfReviews
    }
    const products = await Product.find(filterCriteria);
    if(!products){
      return next(new ErrorHandler("Products not found", 404));
    }
    res.status(200).json({
      success:true,
      products
    });
});

exports.getShareableLink = async (req, res) => {
  try {
    const { Id } = req.params;
    const product = await Product.findById(Id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    const shareableLink = product.shareableLink;
    res.json({ success: true, shareableLink });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getAllProduct = catchAsyncErrors(async (req, res) => {
  const products = await Product.find();
  console.log("hii");
  res.status(200).json({
    success: true,
    products,
  });
});
