const express = require("express");
const router = express.Router();
const paymentHistoryController = require("../controllers/paymentHistoryController");

// PaymentHistory CRUD routes
router.get("/", paymentHistoryController.getAllPaymentRecords); // Get all payment records
router.get("/:id", paymentHistoryController.getPaymentRecordById); // Get payment record by ID
router.post("/", paymentHistoryController.createPaymentRecord); // Create a new payment record
router.put("/:id", paymentHistoryController.updatePaymentRecord); // Update payment record by ID
router.delete("/:id", paymentHistoryController.deletePaymentRecord); // Delete payment record by ID

module.exports = router;
