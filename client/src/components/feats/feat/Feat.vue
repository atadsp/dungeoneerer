<template>
  <div class="row">
      <div class="col-sm-12">
        <div v-if="loading" class="loading">
            <p>Loading...</p>
        </div>

        <div v-if="error" class="error">
            <p>{{ error }}</p>
        </div>

        <div v-if="feat" class="content">
            <div class="row">
                <div class="col-sm-12">
                    <h2>Feat</h2>
                    <p>{{feat}}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import {FeatAPI} from "./feat.api"

export default {
    data() {
        return {
            loading: false,
            feat: null,
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
            FeatAPI.getFeat(this.$route.params.id)
                .then((response)=>{
                    this.feat = response.data;
                    this.loading = false
                })
                .catch((e)=>{
                    this.error = e.toString();
                })
        }
    },
    props: ['Feat']
}
</script>

<style lang="css">
</style>