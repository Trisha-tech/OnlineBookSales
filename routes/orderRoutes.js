const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  updateOrder,
  deleteOrder,
  createOrder
} = require("../controllers/orderController");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth.js");

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, myOrders);

router
  .route("/admin/order/:id")
  .put(updateOrder)
  .delete(deleteOrder);

router.route("/orders/createOrder").post(createOrder);

module.exports = router;