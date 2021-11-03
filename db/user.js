const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
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
    user_type: {
      type: String,
      enum: ["Customer", "Driver"],
      default: "Customer",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
