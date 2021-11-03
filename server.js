require("dotenv").config();
const express = require("express");

const db = require("./db/models");
const carRoutes = require("./routes/car-routes");
const driverRoutes = require("./routes/driver-routes");
const locationRoutes = require("./routes/location-routes");

API_PORT = process.env.API_PORT || 6070;
API_BIND_ADDRESS = process.env.API_BIND_ADDRESS || "0.0.0.0";

app = express();

app.use(express.json({ limit: "3MB" }));

app.use("/car", carRoutes);
app.use("/driver", driverRoutes);
app.use("/location", locationRoutes);

app.use((req, res, next) => {
  return res.send({ message: "Route not found!", code: 404 });
});

// it connects to DB
db.connectDB();

app.listen(API_PORT, API_BIND_ADDRESS, () => {
  console.log(`Server running on ${API_BIND_ADDRESS}:${API_PORT}`);
});
