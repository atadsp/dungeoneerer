<template>
  <div class="row">
      <div class="col-sm-12">
        <div v-if="loading" class="loading">
            <p>Loading...</p>
        </div>

        <div v-if="error" class="error">
            <p>{{ error }}</p>
        </div>

        <div v-if="feats" class="content">
            <h2>Feats</h2>
            <table class="table table-bordered table-hover">
                <thead class="thead-light">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Short Description</th>
                        <th scope="col">Rulebook</th>
                        <th scope="col">Game Version</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="feat in feats" :key="feat.id">
                        <td>{{feat.feat_name}}</td>
                        <td>{{feat.short_description}}</td>
                        <td>{{feat.book_name}}</td>
                        <td>{{feat.version_name}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</template>

<script>
import {FeatsAPI} from "./feats"

export default {
    data() {
        return {
            loading: false,
            feats: null,
            error: null
        }
    },
    mounted() {
        // fetch the data when the view is created and the data is
        // already being observed
        this.fetchData()
    },
    watch: {
        // call again the method if the route changes
        '$route': 'fetchData'
    },
    methods: {
        fetchData() {
            this.error = this.post = null
            this.loading = true
            FeatsAPI.getFeats()
                .then((response)=>{
                    this.feats = response.data;
                    this.loading = false
                })
                .catch((e)=>{
                    this.error = e.toString();
                })
        }
    },
    props: ['Feats']
}
</script>

<style lang="css">
</style>