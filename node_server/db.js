const mysql = require("mysql2/promise");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Handle application termination
process.on("exit", (code) => {
  pool.end((err) => {
    if (err) console.error("Error closing the database connection:", err);
    console.log("Database connection closed.");
  });
});

module.exports = pool;
