const express = require("express");
const {
  registerCustomer,
  loginCustomer,
  getCustomerDetails,
  updatePassword,
  updateProfile,

} = require("../controllers/customerController.js");
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth.js");


const router = express.Router();

router.route("/register").post(registerCustomer);

router.route("/login").post(loginCustomer);

router.route("/me").get(isAuthenticatedUser, getCustomerDetails);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);




module.exports = router;