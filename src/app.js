const express = require("express");
const app = express();
const PORT = 5000;

//Middlewares

// soin up the server
app.listen(PORT, () => {
  return console.log(`Server is listening on port:${PORT}`);
});
