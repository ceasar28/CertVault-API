const express = require("express");
const app = express();
const PORT = 5000;

//Middlewares
const fs = require("fs");

const excel = fs.readFile("src/Team-Clutch.csv", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  //   console.log(data);
  return data;
});

const csv = require("./models/certModal");

const data = new csv({
  signer: "emmanuel",
  name: "fake",
  csv: excel,
});
data.save();

const user = User.findOne({ name: "fake" });

console.log(user);
// spin up the server

console.log();
const connectDb = require("../config/database");
const serverUp = async () => {
  try {
    const connected = await connectDb("mongodb://localhost:27017/certVault_DB");
    app.listen(PORT, () => {
      return console.log(`Server is listening on port:${PORT}`);
    });

    if (connected) {
      console.log("Database connected");
    } else console.log("Database not connected");
  } catch (error) {
    console.log(error);
  }
};

serverUp();
