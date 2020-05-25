import express = require("express");
import DeleteFeat from "./delete-feat.handler";
import {IFeat} from "./feat.interface";
import GetFeat from "./get-feat.handler";
import InsertFeat from "./insert-feat.handler";

class Feats {
    public NewFeatService(app: express.Express): express.Express {
        app.get("/api/v1/feats", async (req: any, res: any) => {
            const resp = await GetFeat.getFeat()
                .catch((e) => {
                    res.status(400).send(e);
                    return;
                });

            res.send(resp);
        });

        app.get("/api/v1/feat/:id", async (req: any, res: any) => {
            if (!req.params.id) {
                res.status("No ID provided").send(400);
                return;
            }

            const resp = await GetFeat.getFeatByID(req.params.id)
                .catch((e) => {
                    res.status(400).send(e);
                    return;
                });

            res.send(resp);
        });

        app.post("/api/v1/feat", async (req: any, res: any) => {

            const resp = await InsertFeat.insertFeat(req.body as IFeat)
                .catch((e) => {
                    res.status(400).send(e);
                    return;
                });

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

            await DeleteFeat.deleteFeatById(req.params.id)
                .then(() => {
                    res.status(204).send("");
                })
                .catch((e) => {
                    res.status(400).send(e);
                    return;
                });
        });

        return app;
    }

}

export default new Feats();
