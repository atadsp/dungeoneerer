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
    render: h => h(App, {
        props: {
            sitename
        }
    })
}).$mount("#app");
