import * as dotenv from "dotenv";
import express = require("express");
const database = require("./database/database");

dotenv.config();

const app = express();
require('./routes/routes')(app);

const PORT = process.env.PORT;

if(PORT){
  app.listen(PORT, () => {
    const text = "SELECT type, categories, prerequisites, game_effects, description, benefit, special, normal, feats.name AS name, versions.name AS version_name FROM dungeoneerer.feats feats, dungeoneerer.versions versions WHERE versions.version_id = feats.version_id"
    // const params = ["%Weapon%", 1]
    database.query(text, "", (err:any, res:any)=>{
      if(err){
        console.error(err);
      } else {
        console.log(res.rows)
      }
    });
    console.log("It's working! It's working! " + PORT);
  });
} else {
  console.log("ENV's are not set, please set them in the .env");
}