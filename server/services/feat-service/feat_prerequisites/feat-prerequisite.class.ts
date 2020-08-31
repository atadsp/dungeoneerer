import * as express from "express";

class FeatPrerequisites {
    public FeatPrerequisitesRoutes(app: express.Express): express.Express {

        return app;
    }
}

export default new FeatPrerequisites();
