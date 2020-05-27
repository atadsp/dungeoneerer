import * as express from "express";
import expressVue from "express-vue";
import path from "path";

class FrontEndRouter {
    public build(app: express.Express): express.Express {

        const vueOptions = {
            head: {
                title: process.env.APP_NAME,
                // Meta tags
                metas: [
                    { property: "og:title", content: process.env.APP_NAME,},
                    { name: "application-name", content: process.env.APP_NAME},
                    { name: "description", content: "A D&D 3.5 and Pathfinder 1 resource", id: "desc" }, // id to replace intead of create element
                    // ...
                    // Twitter
                    // { name: "twitter:title", content: "Content Title" },
                    // ...
                    // Facebook / Open Graph
                    // { property: "fb:app_id", content: "123456789" },
                    // { property: "og:title", content: "Content Title" },
                    // ...
                    { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no", },
                    // Rel
                    { rel: "icon", type: "image/png", href: "/assets/favicons/favicon-32x32.png", sizes: "32x32" }
                    // Generic rel for things like icons and stuff
                ],
                // Scripts
                scripts:[
                    // { src: "/assets/scripts/hammer.min.js" },
                ],
                // Styles
                styles: [
                    { style: "/node_modules/bootstrap/dist/css/bootstrap.min.css", type: "text/css"},
                    { style: "../client/public/styles/App.css", type: "text/css" }
                    // Note with Styles, [type] is optional...
                    // ...
                ],
                template: {
                    html: {
                        start: `<!DOCTYPE html><html>`,
                        end: `</html>`
                    },
                    body: {
                        start: `<body>`,
                        end: `</body>`
                    },
                    template: {
                        start: `<div id="app" class="container">`,
                        end: `</div>`
                    }
                }
            },
            pagesPath: path.normalize(path.join(__dirname, "../../client/src")),
        }

        expressVue.use(app, vueOptions).then(() => {
            app.get("/", (req: any, res: any) => {

                const data = {
                    title: "TEST",
                };

                res.renderVue("App.vue", data);
            });
        });

        return app;
    }
}

export default new FrontEndRouter();
