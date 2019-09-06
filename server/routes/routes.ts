import bodyParser = require("body-parser");

module.exports = (app: any) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.get("/", (req: any, res: any) => {
        res.send("Hello World!");
    });
};
