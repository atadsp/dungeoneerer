<template>
    <div id="app">
        <Nav v-bind:sitename="sitename"></Nav>
        <router-view></router-view>
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