// controllers/carChargeHistoryController.js

const db = require("../db");
const asyncHandler = require("express-async-handler");

// @desc Create a new car charge history
// @route POST /api/car-charge-history
// @access Private/Admin
exports.createChargeHistory = asyncHandler(async (req, res) => {
  const { car_id, start_date, end_date, price } = req.body;
  if (!car_id || !start_date || !end_date || !price) {
    return res.status(400).send("Please provide all required fields.");
  }
  const [results] = await db.query(
    "INSERT INTO CarChargeHistory (car_id, start_date, end_date, price) VALUES (?, ?, ?, ?)",
    [car_id, start_date, end_date, price]
  );
  res.status(201).send({
    id: results.insertId,
    car_id,
    start_date,
    end_date,
    price,
  });
});

// @desc Get all car charge histories
// @route GET /api/car-charge-history
// @access Public
exports.getAllChargeHistories = asyncHandler(async (req, res) => {
  const [results] = await db.query("SELECT * FROM CarChargeHistory");
  res.send(results);
});

// @desc Get car charge history by ID
// @route GET /api/car-charge-history/:id
// @access Public
exports.getChargeHistoryById = asyncHandler(async (req, res) => {
  const [results] = await db.query(
    "SELECT * FROM CarChargeHistory WHERE car_id = ?",
    [req.params.id]
  );
  res.send(results);
});

// @desc Update car charge history by ID
// @route PUT /api/car-charge-history/:id
// @access Private/Admin
exports.updateChargeHistory = asyncHandler(async (req, res) => {
  const { car_id, start_date, end_date, price } = req.body;
  const [results] = await db.query(
    "UPDATE CarChargeHistory SET car_id = ?, start_date = ?, end_date = ?, price = ? WHERE id = ?",
    [car_id, start_date, end_date, price, req.params.id]
  );
  if (results.affectedRows === 0) {
    return res.status(404).send("Charge history not found.");
  }
  res.send({
    id: req.params.id,
    car_id,
    start_date,
    end_date,
    price,
  });
});

// @desc Delete car charge history by ID
// @route DELETE /api/car-charge-history/:id
// @access Private/Admin
exports.deleteChargeHistory = asyncHandler(async (req, res) => {
  db.query(
    "DELETE FROM CarChargeHistory WHERE id = ?",
    [req.params.id],
    (err, results) => {
      if (err) throw err;
      if (results.affectedRows === 0) {
        return res.status(404).send("Charge history not found.");
      }
      res.send({
        message: "Charge history deleted",
        id: parseInt(req.params.id),
      });
    }
  );
});
