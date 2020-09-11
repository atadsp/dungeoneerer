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
                    <div class="card">
                        <div class="card-header">
                            <h2>{{feat.feat_name}}</h2>
                        </div>
                        <div class="card-body">
                            <span v-if="relatedFeats && relatedFeats.same_feat && relatedFeats.same_feat.length > 0">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h5>Other Versions:</h5>
                                        <span v-for="sf in relatedFeats.same_feat" :key="sf.feat_id">
                                            {{sf}}
                                        </span>
                                    </div>
                                </div>
                            </span>
                            <br>
                            <p class="card-text">{{feat}}</p>
                        </div>
                    </div>
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
            relatedFeats: null,
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
                    FeatAPI.getRealtedFeats(this.$route.params.id)
                        .then((response=>{
                            this.relatedFeats = response.data
                        }))
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