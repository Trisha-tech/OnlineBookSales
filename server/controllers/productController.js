const Product = require("../models/productSchema.js");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");
const ErrorHandler=require("../utils/errorHandler.js")

// CREATE PRODUCT
exports.createProduct = catchAsyncErrors(async (req, res, next) => {
  
    const product = await Product.create(req.body);

      await product.save();
      const { url } = req.body;
      if (url) {
                  product.shareableLink = url;
                  await product.save();
              }

    res.status(201).json({
      success: true,
      product,
    });
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
