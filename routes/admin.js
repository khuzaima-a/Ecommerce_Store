const express = require("express");
const path = require("path");
const Validation = require("../utils/validation");

const adminController = require("../controller/admin");
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get("/add-product", isAuth, adminController.getAddProduct);

router.post("/add-product", Validation.productValidation,  isAuth,  adminController.postAddProduct);

router.get("/products", isAuth, adminController.getProducts);

router.post("/edit-product",Validation.productValidation,isAuth,adminController.postEditProduct);

router.get("/edit-product/:productId", isAuth, adminController.getEditProduct);

router.post("/delete-product/:productId", isAuth, adminController.postDeleteProduct)

module.exports = router;
