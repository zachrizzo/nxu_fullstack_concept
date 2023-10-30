const db = require("../db");
const asyncHandler = require("express-async-handler");

exports.createCar = asyncHandler(async (req, res) => {
  const { model, year, color, price } = req.body;
  if (!model || !year || !color || !price) {
    return res.status(400).send("Please provide all required fields.");
  }
  const [results] = await db.query(
    "INSERT INTO Cars (model, year, color, price) VALUES (?, ?, ?, ?)",
    [model, year, color, price]
  );
  res.status(201).send({
    id: results.insertId,
    model,
    year,
    color,
    price,
  });
});

exports.getAllCars = asyncHandler(async (req, res) => {
  const [results] = await db.query("SELECT * FROM Cars");
  res.send(results);
});

exports.getCarById = asyncHandler(async (req, res) => {
  const [results] = await db.query("SELECT * FROM Cars WHERE id = ?", [
    req.params.id,
  ]);
  if (results.length === 0) {
    return res.status(404).send("Car not found.");
  }
  res.send(results[0]);
});

exports.updateCar = asyncHandler(async (req, res) => {
  const { model, year, color, price } = req.body;
  if (!model || !year || !color || !price) {
    return res.status(400).send("Please provide all required fields.");
  }
  const [results] = await db.query(
    "UPDATE Cars SET model = ?, year = ?, color = ?, price = ? WHERE id = ?",
    [model, year, color, price, req.params.id]
  );
  if (results.affectedRows === 0) {
    return res.status(404).send("Car not found.");
  }
  res.send({
    id: req.params.id,
    model,
    year,
    color,
    price,
  });
});

exports.deleteCar = asyncHandler(async (req, res) => {
  const [results] = await db.query("DELETE FROM Cars WHERE id = ?", [
    req.params.id,
  ]);
  if (results.affectedRows === 0) {
    return res.status(404).send("Car not found.");
  }
  res.send({ message: "Car deleted", id: parseInt(req.params.id) });
});
