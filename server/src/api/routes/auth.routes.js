const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// User registration
router.post("/register", authController.register);

// User login
router.post("/login", authController.login);

// get all users
router.get("/users", authController.getAllUsers);

module.exports = router;
