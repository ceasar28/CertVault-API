const mongoose = require("mongoose");

const csvSchema = new mongoose.Schema({
  signer: {
    type: String,
    required: true,
  },
  certificate: {
    type: Array,
    require: true,
  },
});

module.exports = new mongoose.model("certificate", csvSchema);
