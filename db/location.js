const mongoose = require("mongoose");

const GeoLocationSchema = new mongoose.Schema({
  // Required fields
  type: {
    type: String,
    default: "Point",
  },
  coordinates: {
    type: [Number],
    required: true,
    index: "2dsphere",
  },
});

const LocationSchema = new mongoose.Schema(
  {
    // Non required fields
    location: GeoLocationSchema,

    // References
    driver: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Driver",
    },
  },
  { timestamps: { createdAt: false, updatedAt: true } }
);

const Location = mongoose.model("Location", LocationSchema);
module.exports = Location;
