require("dotenv").config();
const express = require("express");
const https = require("https");
const fs = require("fs");
const cors = require("cors");
const userRoutes = require("./routes/usersRoutes");
const userCarRoutes = require("./routes/userCarRoutes");
const paymentHistoryRoutes = require("./routes/paymentsHistoryRoutes");
const carRoutes = require("./routes/carRoutes");
const carChargeHistoryRoutes = require("./routes/carChargeHistoryRoutes");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/api/users", userRoutes);
app.use("/api/user-cars", userCarRoutes);
app.use("/api/payment-history", paymentHistoryRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/car-charge-history", carChargeHistoryRoutes);

const port = process.env.PORT || 3000;

// Your SSL/TLS credentials
// const options = {
//   key: fs.readFileSync("path/to/your/private-key.pem"),
//   cert: fs.readFileSync("path/to/your/certificate.pem"),
// };

https.createServer(app).listen(port, () => {
  console.log(`listening on port ${port}...`);
});
