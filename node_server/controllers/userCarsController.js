/// controllers/userCarsController.js

const db = require("../db");
const asyncHandler = require("express-async-handler");

exports.createUserCar = asyncHandler(async (req, res) => {
  const { user_id, car_id } = req.body;
  if (!user_id || !car_id) {
    return res.status(400).send("Please provide all required fields.");
  }
  const [results] = await db.query(
    "INSERT INTO UserCars (user_id, car_id) VALUES (?, ?)",
    [user_id, car_id]
  );
  res.status(201).send({
    user_id,
    car_id,
  });
});

exports.getAllUserCars = asyncHandler(async (req, res) => {
  const [results] = await db.query("SELECT * FROM UserCars");
  res.send(results);
});

exports.getUserCarsByUserId = asyncHandler(async (req, res) => {
  const userId = req.params.userId;

  // Get the car details for each car associated with the user
  const query = `
    SELECT Cars.*
    FROM UserCars
    JOIN Cars ON UserCars.car_id = Cars.id
    WHERE UserCars.user_id = ?
  `;

  const [results] = await db.query(query, [userId]);

  if (results.length === 0) {
    return res.status(404).send("No cars found for the user.");
  }

  res.send(results);
});

exports.updateUserCar = asyncHandler(async (req, res) => {
  const { user_id, car_id } = req.body; // New values
  if (!user_id || !car_id) {
    return res.status(400).send("Please provide all required fields.");
  }
  const [results] = await db.query(
    "UPDATE UserCars SET user_id = ?, car_id = ? WHERE user_id = ? AND car_id = ?",
    [user_id, car_id, req.params.userId, req.params.carId]
  );
  if (results.affectedRows === 0) {
    return res.status(404).send("User-Car association not found.");
  }
  res.send({
    user_id,
    car_id,
  });
});

exports.deleteUserCar = asyncHandler(async (req, res) => {
  const [results] = await db.query(
    "DELETE FROM UserCars WHERE user_id = ? AND car_id = ?",
    [req.params.userId, req.params.carId]
  );
  if (results.affectedRows === 0) {
    return res.status(404).send("User-Car association not found.");
  }
  res.send({
    message: "User-Car association deleted",
    user_id: parseInt(req.params.userId),
    car_id: parseInt(req.params.carId),
  });
});
