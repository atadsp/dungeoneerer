import * as bodyParser from "body-parser";
import express from "express";
import path from "path";
import Feats from "../services/feat-service/feat.service";

class Router {
    public build(): express.Express {
        let app = express();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));

        app = Feats.NewFeatService(app);


        app.use(express.static(path.resolve(__dirname + "../../../client/dist/")));

        app.get("/", (req, res)=>{
          res.sendFile( path.resolve(__dirname + '../../../client/dist/index.html') );
        })

        return app;
    }
}

export default new Router();
