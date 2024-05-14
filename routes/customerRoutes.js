const express = require("express");
const {
  registerCustomer,
  loginCustomer,
  getCustomerDetails,
  updatePassword,
  updateProfile,
  logoutCustomer,
  addFeedback
  

} = require("../controllers/customerController.js");
const {
  addTocart,
  getCartItems,
  deleteCartItem
}=require('../controllers/cartController');
const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth.js");


const router = express.Router();

router.route("/register").post(registerCustomer);

router.route("/login").post(loginCustomer);

router.route("/logout").post(isAuthenticatedUser, logoutCustomer)

router.route("/me").get(isAuthenticatedUser, getCustomerDetails);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);

router.route("/me/update").put(isAuthenticatedUser, updateProfile);





//cart routes
//instead of sending user as req parameter we can send user id
router.route("/cart/add-product").post(addTocart);

router.route("/cart/remove-product").delete(deleteCartItem);

router.route("/cart").get(getCartItems);


//cart routes
//instead of sending user as req parameter we can send user id
router.route("/cart/add-product").post(isAuthenticatedUser,addTocart);

router.route("/cart/remove-product").delete(isAuthenticatedUser,deleteCartItem);

router.route("/cart").get(isAuthenticatedUser,getCartItems);


//giving feedback
router.route("/add-feedback").post(isAuthenticatedUser,addFeedback);
module.exports = router;