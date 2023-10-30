// controllers/paymentHistoryController.js

const db = require("../db");
const asyncHandler = require("express-async-handler");

exports.createPaymentRecord = asyncHandler(async (req, res) => {
  const { user_car_user_id, user_car_car_id, date, amount } = req.body;
  if (!user_car_user_id || !user_car_car_id || !date || !amount) {
    return res.status(400).send("Please provide all required fields.");
  }
  const [results] = await db.query(
    "INSERT INTO PaymentHistory (user_car_user_id, user_car_car_id, date, amount) VALUES (?, ?, ?, ?)",
    [user_car_user_id, user_car_car_id, date, amount]
  );
  res.status(201).send({
    id: results.insertId,
    user_car_user_id,
    user_car_car_id,
    date,
    amount,
  });
});

exports.getAllPaymentRecords = asyncHandler(async (req, res) => {
  const [results] = await db.query("SELECT * FROM PaymentHistory");
  res.send(results);
});

exports.getPaymentRecordById = asyncHandler(async (req, res) => {
  const [results] = await db.query(
    "SELECT * FROM PaymentHistory WHERE id = ?",
    [req.params.id]
  );
  res.send(results[0]);
});

exports.updatePaymentRecord = asyncHandler(async (req, res) => {
  const { user_car_user_id, user_car_car_id, date, amount } = req.body;
  if (!user_car_user_id || !user_car_car_id || !date || !amount) {
    return res.status(400).send("Please provide all required fields.");
  }
  const [results] = await db.query(
    "UPDATE PaymentHistory SET user_car_user_id = ?, user_car_car_id = ?, date = ?, amount = ? WHERE id = ?",
    [user_car_user_id, user_car_car_id, date, amount, req.params.id]
  );
  if (results.affectedRows === 0) {
    return res.status(404).send("Payment record not found.");
  }
  res.send({
    id: req.params.id,
    user_car_user_id,
    user_car_car_id,
    date,
    amount,
  });
});

exports.deletePaymentRecord = asyncHandler(async (req, res) => {
  const [results] = await db.query("DELETE FROM PaymentHistory WHERE id = ?", [
    req.params.id,
  ]);
  if (results.affectedRows === 0) {
    return res.status(404).send("Payment record not found.");
  }
  res.send({
    message: "Payment record deleted",
    id: parseInt(req.params.id),
  });
});
