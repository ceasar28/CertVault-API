const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  certificate: {
    type: Array,
    require: true,
  },
});

module.exports = new mongoose.model("certificate", userSchema);
