import bodyParser = require("body-parser");
import express = require("express");
import { IRouter } from "./router.interface";

class Router implements IRouter {
    public build(): express.Express {
        const app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({
            extended: true
        }));

        app.get("/", (req: any, res: any) => {
            res.send("Hello World!");
        });

        return app;
    }

}
export default new Router();
