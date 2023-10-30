const db = require("../db");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//@desc Create a new user
//@route POST /api/users
//@access Public
exports.createUser = asyncHandler(async (req, res) => {
  const { first_name, last_name, email, phone, password } = req.body;

  if (!first_name || !last_name || !email || !phone || !password) {
    return res.status(400).send("Please provide all required fields.");
  }

  if (password.length < 8) {
    return res.status(400).send("Password must be at least 8 characters long.");
  }

  // Check if user already exists
  const [users] = await db.query("SELECT * FROM Users WHERE email = ?", [
    email,
  ]);
  if (users.length > 0) {
    return res.status(400).send("User already exists.");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const [results] = await db.query(
    "INSERT INTO Users (first_name, last_name, email, phone, password) VALUES (?, ?, ?, ?, ?)",
    [first_name, last_name, email, phone, hashedPassword]
  );

  // Create JWT token after successful registration
  const token = jwt.sign({ id: results.insertId }, process.env.JWT_SECRET, {
    expiresIn: "1h", // Token expires in 1 hour
  });

  res.status(201).send({
    id: results.insertId,
    first_name,
    last_name,
    email,
    phone,
    token,
  });
});

//@desc Get all users
//@route GET /api/users
//@access Public
exports.getAllUsers = asyncHandler(async (req, res) => {
  const [results] = await db.query("SELECT * FROM Users");
  res.send(results);
});

//@desc Get user by ID
//@route GET /api/users/:id
//@access Public

exports.getUserById = asyncHandler(async (req, res) => {
  const [results] = await db.query("SELECT * FROM Users WHERE id = ?", [
    req.params.id,
  ]);
  res.send(results[0]);
});

//@desc Update user by ID
//@route PUT /api/users/:id
//@access Private/Admin

exports.updateUser = asyncHandler(async (req, res) => {
  const { first_name, last_name, email, phone } = req.body;

  if (!first_name || !last_name || !email || !phone) {
    return res.status(400).send("Please provide all required fields.");
  }

  const [results] = await db.query(
    "UPDATE Users SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?",
    [first_name, last_name, email, phone, req.params.id]
  );
  if (results.affectedRows === 0) {
    return res.status(404).send("User not found.");
  }
  res.send({
    id: req.params.id,
    first_name,
    last_name,
    email,
    phone,
  });
});

//@desc Delete user by ID
//@route DELETE /api/users/:id
//@access Private/Admin

exports.deleteUser = asyncHandler(async (req, res) => {
  const [results] = await db.query("DELETE FROM Users WHERE id = ?", [
    req.params.id,
  ]);
  if (results.affectedRows === 0) {
    return res.status(404).send("User not found.");
  }
  res.send({ message: "User deleted", id: parseInt(req.params.id) });
});

//@desc Login user
//@route POST /api/users/login
//@access Public
exports.loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  // const emailLowerCase = email.toLowerCase();
  const [users] = await db.query("SELECT * FROM Users WHERE LOWER(email) = ?", [
    email,
  ]);

  const user = users[0];

  if (!user) {
    return res.status(400).send("Invalid email ");
  }

  // Check the password
  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.status(400).send("Invalid password.");
  }

  // Create and send the token
  const token = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: "1h", // Token expires in 1 hour
    }
  );
  res.send({ token });
});

//@desc Verify token
//@route POST /api/users/verify-token
//@access Public
exports.verifyToken = asyncHandler(async (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
});
