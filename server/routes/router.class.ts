import bodyParser = require("body-parser");
import express = require("express");
import Feats from "../services/feat-service/feat.class";

class Router {
    public build(): express.Express {
        const app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));

        app.get("/", (req: any, res: any) => {
           res.send("base route");
        });

        app.get("/api/feats", async (req: any, res: any) => {
            const feats = await Feats.getFeat();
            res.send(feats);
         });

        return app;
    }

}
export default new Router();
