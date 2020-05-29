import Vue from "vue";

import 'bootstrap';
import './styles/main.scss'

import App from "./App.vue";

const sitename = process.env.SITENAME;

console.log(sitename);

const data = {
    sitename
}

new Vue({
    data:{
        sitename,
    },
    render: h => h(App, {
    })
}).$mount("#app");
