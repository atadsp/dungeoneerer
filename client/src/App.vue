<template>
    <div id="app">
        <Nav v-bind:sitename="sitename"></Nav>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    <br>
                    <router-view></router-view>
                </div>
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