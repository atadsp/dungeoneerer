import bodyParser = require("body-parser");
import express = require("express");
import Database from "../database/database.class";
import { IRouter } from "./router.interface";

class Router implements IRouter {
    public build(): express.Express {
        const app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));

        app.get("/", (req: any, res: any) => {
            console.log("running query");
            const text = `
SELECT fn.short_description, fn.name, f.name as feat_name, f.type, f.categories, f.prerequisites, f.game_effects, f.description, f.benefit,
f.special, f.normal, b.name as book_name, v.name as version_name
  FROM dungeoneerer.feat_index as fi
  LEFT JOIN dungeoneerer.feat_names as fn
  ON fi.feat_name_id = fn.feat_name_id
  LEFT JOIN dungeoneerer.feats as f
  ON fi.feat_id = f.feat_id
  LEFT JOIN dungeoneerer.books as b
  ON fi.book_id = b.book_id
  LEFT JOIN dungeoneerer.versions as v
  ON b.version_id = v.version_id;
`;
// const params = ["%Weapon%", 1]
            Database.query(text, "", (err: any, dbRes: any) => {
                console.log("Here");
                if (err) {
                    console.error(err);
                } else {
                    console.log(dbRes.rows);
                    res.send(dbRes.rows);
                }
            });
        });

        return app;
    }

}
export default new Router();
