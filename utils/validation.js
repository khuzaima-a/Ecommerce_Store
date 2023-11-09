const { check, body } = require("express-validator");
const User = require("../models/user");

exports.loginValidation = [
  body("email")
    .isEmail()
    .withMessage("Please enter a valid email address.")
    .normalizeEmail(),
  body("password", "Password has to be valid.")
    .isLength({ min: 5 })
    .isAlphanumeric()
    .trim(),
];

exports.signupValidation = [
  check("email")
    .isEmail()
    .withMessage("Please enter a valid email.")
    .custom((value, { req }) => {
      return User.findOne({ email: value }).then((userDoc) => {
        if (userDoc) {
          return Promise.reject(
            "E-Mail exists already, please pick a different one."
          );
        }
      });
    })
    .normalizeEmail(),
  body("name", "Please enter at least 2 characters in name.")
    .isLength({ min: 2 })
    .trim(),
  body("password", "Please enter at least 5 characters in password.")
    .isLength({ min: 5 })
    .isAlphanumeric()
    .trim(),
  body("confirmPassword")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords have to match!");
      }
      return true;
    }),
];

exports.productValidation = [
  body("title").isString().isLength({ min: 3 }).trim(),
  body("price").isFloat(),
  body("description").isLength({ min: 5, max: 400 }).trim(),
];

