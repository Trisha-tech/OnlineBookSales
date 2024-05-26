const express = require("express");
const router = express.Router();
const {
  registerCustomer,
  loginCustomer,
  logoutCustomer,
} = require("../controllers/customerController.js");

router.route("/register").post(registerCustomer);
router.route("/login").post(loginCustomer);
router.route("/logout").get(logoutCustomer);

module.exports = router;
