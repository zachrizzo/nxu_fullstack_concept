require("dotenv").config();
const express = require("express");
const https = require("https");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const userRoutes = require("./routes/usersRoutes");
const userCarRoutes = require("./routes/userCarRoutes");
const paymentHistoryRoutes = require("./routes/paymentsHistoryRoutes");
const carRoutes = require("./routes/carRoutes");
const carChargeHistoryRoutes = require("./routes/carChargeHistoryRoutes");

const app = express();
app.use(express.json());
app.use(cors());

const cert = fs.readFileSync(
  path.join(__dirname, "cert", "128770B4D1D1A804FF37324F24017AE0.txt")
);

app.get("/", (req, res) => {
  res.send("hello world");
  console.log("hello world");
});

app.get(
  "/.well-known/pki-validation/128770B4D1D1A804FF37324F24017AE0.txt",
  (req, res) => {
    res.send(cert);
    console.log("cert");
  }
);

app.use("/api/users", userRoutes);
app.use("/api/user-cars", userCarRoutes);
app.use("/api/payment-history", paymentHistoryRoutes);
app.use("/api/cars", carRoutes);
app.use("/api/car-charge-history", carChargeHistoryRoutes);

const port = process.env.PORT || 3000;

// Your SSL/TLS credentials
const options = {
  key: fs.readFileSync(path.join(__dirname, "cert", "private.key")),
  cert: fs.readFileSync(path.join(__dirname, "cert", "certificate.crt")),
};

// app.listen(port, () => {
//   console.log(`listening on port ${port}...`);
// });

https.createServer(options, app).listen(port, () => {
  console.log(`listening on port ${port}...`);
});
