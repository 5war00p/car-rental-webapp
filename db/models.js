const mongoose = require("mongoose");

const CONN_STRING = process.env.DB_URI || "Invalid connection string";

const connectDB = async () => {
  mongoose
    .connect(CONN_STRING)
    .then(() => {
      console.log("MongoDB connection established successfully!");
    })
    .catch((err) => {
      console.error(err.message);
    });
};

module.exports = {
  mongoose,
  connectDB,
};
