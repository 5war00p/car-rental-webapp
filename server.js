require("dotenv").config();
const express = require("express");

const db = require("./db/models");

API_PORT = process.env.API_PORT || 6070;
API_BIND_ADDRESS = process.env.API_BIND_ADDRESS || "0.0.0.0";

app = express();

app.use(express.json({ limit: "3MB" }));

app.use((req, res) => {
  throw { message: "Route not found!", code: 404 };
});

// it connects to DB
db.connectDB();

app.listen(API_PORT, API_BIND_ADDRESS, () => {
  console.log(`Server running on ${API_BIND_ADDRESS}:${API_PORT}`);
});
