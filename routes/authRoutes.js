const express = require("express");
const router = express.Router();
const {
  registerCustomer,
  loginCustomer,
  logoutCustomer,
  forgotPassword,
  resetPassword,
} = require("../controllers/customerController.js");

router.route("/register").post(registerCustomer);
router.route("/login").post(loginCustomer);
router.route("/logout").get(logoutCustomer);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

module.exports = router;
