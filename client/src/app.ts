import {createApp} from 'vue';
import {createRouter, createWebHashHistory} from "vue-router";
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap';
import './styles/main.scss'

import App from "./App.vue";

const sitename = process.env.SITENAME;

const data = {
    sitename
}

const routes = [
    { path: '/', component: () => import("./components/Home.vue"), name: "Home" },
    { path: '/feats', component: () => import("./components/feats/feats/Feats.vue"), name: "Feats" },
    { path: '/feats/:id', component: () => import("./components/feats/feat/Feat.vue"), name: "Feat" }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
    })

createApp(App)
    .use(router)
    .mount("#app");
