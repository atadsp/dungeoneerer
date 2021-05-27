import * as express from "express";
import Feats from "./feats/feats.class";
import FeatPrerequisites from "./feat_prerequisites/feat-prerequisite.class";

class FeatsService {
  public NewFeatService(app: express.Express,): express.Express {
    app = Feats.FeatRoutes(app,);
    app = FeatPrerequisites.FeatPrerequisitesRoutes(app,);

    return app;
  }
}

export default new FeatsService();
