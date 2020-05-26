import * as bodyParser from "body-parser";
import express from "express";
import Feats from "../services/feat-service/feat.service";

class Router {
    public build(): express.Express {
        let app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));

        app.get("/", (req: any, res: any) => {
           res.send("base route");
        });

        app = Feats.NewFeatService(app);

        return app;
    }
}

export default new Router();
