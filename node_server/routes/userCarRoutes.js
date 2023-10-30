const express = require("express");
const router = express.Router();
const userCarsController = require("../controllers/userCarsController");

// Cars CRUD routes
router.post("/", userCarsController.createUserCar); // Create a new user-car association
router.get("/", userCarsController.getAllUserCars); // Get all user-car associations
router.get("/:userId", userCarsController.getUserCarsByUserId); // Get user-car associations by user ID
router.put("/:userId", userCarsController.updateUserCar); // Update user-car association by user ID
router.delete("/:userId", userCarsController.deleteUserCar); // Delete user-car association by user ID

module.exports = router;
