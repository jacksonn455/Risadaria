require("dotenv").config();

const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(routes);

app.listen(7001, function () {
  console.log("Server on em: http://localhost:7001/");
});

module.exports = app;
