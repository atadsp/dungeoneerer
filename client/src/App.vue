<template>
    <div id="app">
        <Header></Header>
        <div class="container-fluid">
            <h1>"YO"</h1>
            <p>Welcome to the Vue Webpack final installation hopefully maybe I mean it this time demo.</p>
            <div class="row">
                <div class="col-sm-6">test</div>
                <div class="col-sm-6">test</div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import Header from "./components/Header.vue";

export default {
    name: "App",
        components: {
            Header,
    }
};
</script>

<style lang="css">
</style>