const express = require("express");

const authController = require("../controller/auth");

const Validation = require("../utils/validation");

const router = express.Router();

router.get("/login", authController.getLogin);

router.post("/login", Validation.loginValidation ,authController.postLogin);

router.post("/logout", authController.postLogout);

router.get("/signup", authController.getSignup);

router.post("/signup", Validation.signupValidation , authController.postSignup);

module.exports = router;