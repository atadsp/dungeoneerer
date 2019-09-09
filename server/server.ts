import * as dotenv from "dotenv";
import Database from "./database/database.class";
import Router from "./routes/router.class";

dotenv.config();

const PORT = process.env.PORT;

if (PORT) {
  const app = Router.build();
  app.listen(PORT, () => {
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
    Database.query(text, "", (err: any, res: any) => {
      if (err) {
        console.error(err);
      } else {
        console.log(res.rows);
      }
    });
    console.log("It's working! It's working! " + PORT);
  });
} else {
  console.log("ENV's are not set, please set them in the .env");
}
