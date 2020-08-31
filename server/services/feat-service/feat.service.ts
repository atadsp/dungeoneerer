import * as express from "express";
import Feats from "./feats/feats.class";

class FeatsService {
    public NewFeatService(app: express.Express): express.Express {
        app = Feats.FeatRoutes(app)

        return app;
    }

}

export default new FeatsService();
