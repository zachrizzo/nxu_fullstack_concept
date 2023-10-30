const express = require("express");
const router = express.Router();
const carChargeHistoryController = require("../controllers/carChargeHistoryController");

// CarChargeHistory CRUD routes
router.get("/", carChargeHistoryController.getAllChargeHistories); // Get all car charge records
router.get("/:id", carChargeHistoryController.getChargeHistoryById); // Get car charge record by ID
router.post("/", carChargeHistoryController.createChargeHistory); // Create a new car charge record
router.put("/:id", carChargeHistoryController.updateChargeHistory); // Update car charge record by ID
router.delete("/:id", carChargeHistoryController.deleteChargeHistory); // Delete car charge record by ID

module.exports = router;
