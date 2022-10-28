const express = require("express");
const { renderRegister } = require("../controller/auth.controller");
const router = express.Router();
const authController = require("../controller/auth.controller");

router.get("/register", authController.renderRegister);
