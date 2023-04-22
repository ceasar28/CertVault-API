const express = require("express");
const app = express();
const PORT = 5000;

//Middlewares

// spin up the server
app.listen(PORT, () => {
  return console.log(`Server is listening on port:${PORT}`);
});
