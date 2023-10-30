const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// User CRUD routes
router.post("/", userController.createUser); // Create a new user
router.get("/", userController.getAllUsers); // Get all users
router.get("/:id", userController.getUserById); // Get user by ID
router.put("/:id", userController.updateUser); // Update user by ID
router.delete("/:id", userController.deleteUser); // Delete user by ID

// Authentication and Authorization routes
router.post("/login", userController.loginUser); // Login
router.post("/verify-token", userController.verifyToken); // Verify JWT token

module.exports = router;
