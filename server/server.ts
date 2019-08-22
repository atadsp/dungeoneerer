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

const PORT = process.env.PORT;

if(PORT){
  app.listen(PORT, () => {
    console.log("It's working! It's working! " + PORT);
  });
} else {
  console.log("ENV's are not set, please set them in the .env");
}