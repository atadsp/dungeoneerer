import * as express from "express";
import DeleteFeat from "./handlers/delete-feat.handler";
import { IFeat, } from "../models/feat.interface";
import GetFeat from "./handlers/get-feat.handler";
import InsertFeat from "./handlers/insert-feat.handler";
import UpdateFeat from "./handlers/update-feat.handler";

class Feats {
  public FeatRoutes(app: express.Express,): express.Express {
    app.get("/api/v1/feats", async (req: any, res: any,) => {
      const resp = await GetFeat.getFeat().catch((e,) => {
        res.status(400,).send(e,);
        return;
      },);

      res.send(resp,);
    },);

    app.get("/api/v1/feats_by_index", async (req: any, res: any,) => {
      const resp = await GetFeat.getFeatsByIndex().catch((e,) => {
        res.status(400,).send(e,);
        return;
      },);

      res.send(resp,);
    },);

    app.get("/api/v1/feats/:id", async (req: any, res: any,) => {
      if (!req.params.id) {
        res.status("No ID provided",).send(400,);
        return;
      }

      const resp = await GetFeat.getFeatByID(req.params.id,).catch((e,) => {
        res.status(400,).send(e,);
        return;
      },);

      res.send(resp,);
    },);

    app.get("/api/v1/feats/:id/related", async (req: any, res: any,) => {
      if (!req.params.id) {
        res.status("No ID provided",).send(400,);
        return;
      }

      const resp = await GetFeat.getReleatedFeats(req.params.id,).catch((e,) => {
        res.status(400,).send(e,);
        return;
      },);

      res.send(resp,);
    },);

    app.get("/api/v1/feats/:id/categories", async (req: any, res: any,) => {
      if (!req.params.id) {
        res.status("No ID provided",).send(400,);
        return;
      }

      const resp = await GetFeat.getFeatCategories(req.params.id,).catch((e,) => {
        res.status(400,).send(e,);
        return;
      },);

      res.send(resp,);
    },);

    app.post("/api/v1/feats", async (req: any, res: any,) => {
      const resp = await InsertFeat.insertFeat(req.body as IFeat,).catch((e,) => {
        res.status(400,).send(e,);
        return;
      },);

      res.status(201,).send(resp,);
    },);

    app.patch("/api/v1/feats/:id", async (req: any, res: any,) => {
      console.log("Patching", req.params.id,);
      if (!req.params.id) {
        res.status("No ID provided",).send(400,);
        return;
      }

      const feat = await UpdateFeat.updateFeatById(
        req.body,
        req.params.id,
      ).catch((e,) => {
        res.status(400,).send(e,);
        return;
      },);

      res.status(202,).send(feat,);
    },);

    app.delete("/api/v1/feats/:id", async (req: any, res: any,) => {
      if (!req.params.id) {
        res.status("No ID provided",).send(400,);
        return;
      }

      await DeleteFeat.deleteFeatById(req.params.id,)
        .then(() => {
          res.status(204,).send("",);
        },)
        .catch((e,) => {
          res.status(400,).send(e,);
          return;
        },);
    },);

    return app;
  }
}

export default new Feats();
