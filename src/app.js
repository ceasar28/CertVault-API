const express = require("express");
const app = express();
const PORT = 5000;

//Middlewares

// spin up the server
app.listen(PORT, () => {
  return console.log(`Server is listening on port:${PORT}`);
});

const connectDb = require("../config/database");
const serverUp = async () => {
  try {
    const connected = await connectDb("mongodb://27017/certVault_DB");
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
