const mongoose = require("mongoose");

const csvSchema = new mongoose.Schema({
  signer: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  csv: {
    type: String,
    require: true,
  },
});

module.exports = new mongoose.model("csv", csvSchema);
