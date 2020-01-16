import bodyParser = require("body-parser");
import express = require("express");
import Feats from "../services/feat-service/feat.class";
import { IFeat } from "../services/feat-service/feat.interface";

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

        app.get("/api/v1/feats", async (req: any, res: any) => {
            const resp = await Feats.getFeat();

            if ("error" in resp) {
                res.status(resp.status).send(resp.error);
                return;
            }

            res.send(resp);
        });

        app.get("/api/v1/feat/:id", async (req: any, res: any) => {
            const resp = await Feats.getFeatByID(req.params.id);

            if ("error" in resp) {
                res.status(resp.status).send(resp.error);
                return;
            }

            res.send(resp);
        });

        app.post("/api/v1/feat", async (req: any, res: any) => {
            const resp = await Feats.insertFeat(req.body as IFeat);

            if ("error" in resp) {
                res.status(resp.status).send(resp.error);
                return;
            }

            res.status(201).send(resp);
        });

        return app;
    }

}

export default new Router();
