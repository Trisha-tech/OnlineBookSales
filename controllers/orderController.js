const Order = require("../models/orderSchema.js");
const Product = require("../models/productSchema.js");
const errorHandler = require("../utils/errorHandler");
const responseHandler = require("../utils/responseHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors.js");

// CREATE NEW ORDER
exports.newOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await Order.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  return res.status(200).send({
    response: {
      data: { order },
      title: "Customer Fetched",
      message: "Customer Fetched Successfully!",
      status: 200,
    },
    errors: {},
  });
});

// GET SINGLE ORDER
exports.getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return res
      .status(404)
      .send(errorHandler(404, "Not Found", "Order Not Found"));
  }

  return res.status(200).send({
    response: {
      data: { order },
      title: "Customer Fetched",
      message: "Customer Fetched Successfully!",
      status: 200,
    },
    errors: {},
  });
});

// GET LOGGED IN CUSTOMER  ORDERS
exports.myOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await Order.find({ user: req.user._id });

  return res.status(200).send({
    response: {
      data: { orders },
      title: "Customer Fetched",
      message: "Customer Fetched Successfully!",
      status: 200,
    },
    errors: {},
  });
});

// UPDATE ORDER STATUS -- ADMIN
exports.updateOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res
    .status(404)
    .send(errorHandler(404, "Not Found", "Order Not Found"));
  }

  if (order.orderStatus === "Delivered") {
    return res
      .status(404)
      .send(errorHandler(404, "Order Delivered", "This order has already been deliverers"));
  }

  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (o) => {
      await updateStock(o.product, o.quantity);
    });
  }
  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });
  return res.status(200).send({
    response: {
      data: {},
      title: "Order Updated",
      message: "Order Status Updated Successfully!",
      status: 200,
    },
    errors: {},
  });
});

async function updateStock(id, quantity) {
  const product = await Product.findById(id);

  product.Stock -= quantity;

  await product.save({ validateBeforeSave: false });
}

// DELETE ORDER -- ADMIN
exports.deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    return res
    .status(404)
    .send(errorHandler(404, "Not Found", "Order Not Found"));
  }

  await order.deleteOne();

  res.status(200).json({
    success: true,
  });
});
