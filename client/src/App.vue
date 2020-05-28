<template>
    <html lang="en">
        <Header></Header>
        <div class="container-fluid">
            <h1>{{$root.title}}</h1>
            <p>Welcome to the {{$root.title}} demo.</p>
            <div class="row">
                <div class="col-sm-6">test</div>
                <div class="col-sm-6">test</div>
            </div>
        </div>
    </html>
</template>


<script>
import Main from "./main";
import Header from "./components/Header";

export default {
    mixins: [Main],
    data: function () {
        return {
        }
    },
    components: {
        Header
    }
}
</script>

<style lang="css">
    @import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
    @import "../public/styles/App.css";
</style>