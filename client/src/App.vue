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

export default {
    name: "App",
        components: {
            Nav: () => import("./components/Nav.vue"),
            Footer: () => import("./components/Footer.vue"),
        },
    props:['sitename']
};
</script>

<style lang="css">
</style>