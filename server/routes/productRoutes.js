const express = require("express");
const {
  createProduct,
  getAdminProducts,
  getProductDetails,
  getShareableLink,//it was missing causing error
  updateProduct,
  deleteProduct,
  searchProduct,
  filterProduct
} = require("../controllers/productController.js");

const router = express.Router();

router
  .route("/admin/product/new")
  .post(createProduct);

  router
  .route("/admin/products")
  .get(getAdminProducts);

  router.route("/product/:id").get(getProductDetails);

  router.route("/producturl/:id").get(getShareableLink);

  router
  .route("/admin/product/:id")
  .put(updateProduct)
  .delete(deleteProduct);



  router.route("/product/search/:id").get(searchProduct);
  router.route("/product").get(filterProduct);
  
module.exports = router;
