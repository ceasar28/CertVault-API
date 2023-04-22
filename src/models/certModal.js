const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = new mongoose.model("user", userSchema);
