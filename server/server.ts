import bodyParser = require("body-parser");
import * as dotenv from "dotenv";
import express = require("express");

const app = express();
dotenv.config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log("It's working! It's working! " + PORT);
});
