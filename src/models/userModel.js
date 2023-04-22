const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    require: true,
  },
  certificates: {
    type: Array,
  },
});

module.exports = new mongoose.model("user", userSchema);
