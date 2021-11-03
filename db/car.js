const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
  {
    // Required fields
    number_plate: {
      type: String,
      required: true,
    },

    // References
    driver: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Driver",
    },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", CarSchema);
module.exports = Car;
