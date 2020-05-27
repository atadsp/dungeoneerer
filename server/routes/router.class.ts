import * as bodyParser from "body-parser";
import express from "express";
import path from "path";
import Feats from "../services/feat-service/feat.service";
import FrontEndRouter from "./front-router.handler";

class Router {
    public build(): express.Express {
        let app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));

        app.use(express.static(path.join(__dirname, "../client/public")));

        app = Feats.NewFeatService(app);

        app = FrontEndRouter.build(app);

        return app;
    }
}

export default new Router();
