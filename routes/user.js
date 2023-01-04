const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controller/userController");

router.route("/").post(userController.register);

router.route("/login").post(userController.login)

module.exports = router;
