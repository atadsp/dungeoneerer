import Vue from "vue";
import VueRouter from "vue-router";
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap';
import './styles/main.scss'

import App from "./App.vue";

import Home from "./components/Home.vue";
import Feats from "./components/feats/feats/Feats.vue";
import Feat from "./components/feats/feat/Feat.vue";


const sitename = process.env.SITENAME;

const data = {
    sitename
}

const router = new VueRouter({
    routes: [
        { path: '/', component: Home, name: "Home" },
        { path: '/feats', component: Feats, name: "Feats" },
        { path: '/feats/:id', component: Feat, name: "Feat" }
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
