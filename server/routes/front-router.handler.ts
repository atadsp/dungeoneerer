import express from "express";
import expressVue from "express-vue";

class FrontEndRouter {
    public build(app: express.Express): express.Express {

        expressVue.use(app).then(() => {
            app.get("/", (req, res) => {

                const data = {
                    title: "TEST",
                };

                res.renderVue("index.vue", data);
            });
        });

        return app;
    }
}

export default new FrontEndRouter();
