<template>
    <div id="app">
        <Nav v-bind:sitename="sitename"></Nav>
        <div class="container-fluid">
            <h1>"YO"</h1>
            <p>Welcome to the Vue Webpack final installation hopefully maybe I mean it this time demo.</p>
            <div class="row">
                <div class="col-sm-6">test</div>
                <div class="col-sm-6">test</div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>


<script lang="ts">
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";

export default {
    name: "App",
        components: {
            Nav,
            Footer,
        },
        props:['sitename']
};
</script>

<style lang="css">
</style>