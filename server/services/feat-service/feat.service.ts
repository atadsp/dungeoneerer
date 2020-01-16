import express = require("express");
import DeleteFeat from "./delete-feat.handler";
import {IFeat} from "./feat.interface";
import GetFeat from "./get-feat.handler";
import InsertFeat from "./insert-feat.handler";

class Feats {
    public NewFeatService(app: express.Express): express.Express {
        app.get("/api/v1/feats", async (req: any, res: any) => {
            const resp = await GetFeat.getFeat();

            if ("error" in resp) {
                res.status(resp.status).send(resp.error);
                return;
            }

            res.send(resp);
        });

        app.get("/api/v1/feat/:id", async (req: any, res: any) => {
            if (!req.params.id) {
                res.status("No ID provided").send(400);
                return;
            }

            const resp = await GetFeat.getFeatByID(req.params.id);

            if ("error" in resp) {
                res.status(resp.status).send(resp.error);
                return;
            }

            res.send(resp);
        });

        app.post("/api/v1/feat", async (req: any, res: any) => {
            const resp = await InsertFeat.insertFeat(req.body as IFeat);

            if ("error" in resp) {
                res.status(resp.status).send(resp.error);
                return;
            }

            res.status(201).send(resp);
        });

        app.patch("/api/v1/feat/:id", async (req: any, res: any) => {
            console.log("Patching", req.params.id);
            if (!req.params.id) {
                console.log("test1");
                res.status("No ID provided").send(400);
                return;
            }
            console.log("test2");

            res.status(202).send("");
        });

        app.delete("/api/v1/feat/:id", async (req: any, res: any) => {
            if (!req.params.id) {
                res.status("No ID provided").send(400);
                return;
            }

            const resp = await DeleteFeat.deleteFeatById(req.params.id);

            if (resp && "error" in resp) {
                res.status(resp.status).send(resp.error);
                return;
            }

            res.status(204).send("");
        });

        return app;
    }

}

export default new Feats();
