const mongoose = require("mongoose");

const DriverSchema = new mongoose.Schema(
  {
    // Required fields
    name: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },

    // References
    location: {
      type: mongoose.Types.ObjectId,
      ref: "Location",
    },
  },
  { timestamps: true }
);

const Driver = mongoose.model("Driver", DriverSchema);
module.exports = Driver;
