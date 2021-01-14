import Vue from "vue";
import VueRouter from "vue-router";
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap';
import './styles/main.scss'

import App from "./App.vue";

const sitename = process.env.SITENAME;

const data = {
    sitename
}

const router = new VueRouter({
    routes: [
        { path: '/', component: () => import("./components/Home.vue"), name: "Home" },
        { path: '/feats', component: () => import("./components/feats/feats/Feats.vue"), name: "Feats" },
        { path: '/feats/:id', component: () => import("./components/feats/feat/Feat.vue"), name: "Feat" }
    ]
})

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

new Vue({
    router,
    render: h => h(App,
    {
        props: {
            sitename
        },
    }),
}).$mount("#app");
