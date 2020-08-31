import Vue from "vue";
import VueRouter from "vue-router";

import 'bootstrap';
import './styles/main.scss'

import App from "./App.vue";

import Home from "./components/Home.vue";
import Feats from "./components/feats/Feats.vue";


const sitename = process.env.SITENAME;

const data = {
    sitename
}

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/feats', component: Feats }
    ]
})

Vue.use(VueRouter);

new Vue({
    router,
    render: h => h(App,
    {
        props: {
            sitename
        },
    }),
}).$mount("#app");
