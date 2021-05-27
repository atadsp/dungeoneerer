import { createApp, } from "vue";
import { createRouter, createWebHashHistory, } from "vue-router";

import "bootstrap";
import "./styles/main.scss";

import App from "./App.vue";

const sitename = process.env.SITENAME;

const routes = [
  { path: "/", component: () => import("./components/Home.vue"), name: "Home", },
  {
    path: "/feats",
    component: () => import("./components/feats/feats/Feats.vue"),
    name: "Feats",
  },
  {
    path: "/feats/:id",
    component: () => import("./components/feats/feat/Feat.vue"),
    name: "Feat",
  },
  {
    path: "/character_generator",
    component: () => import("./components/character_generator/CharacterGenerator.vue"),
    name: "CharacterGenerator",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
},);

const app = createApp(App, { sitename, },);

app.use(router,).mount("#app",);
