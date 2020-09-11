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
                            <span v-if="relatedFeats && relatedFeats.requires && relatedFeats.requires.length > 0">
                                <div class="row related-feat-bloc">
                                    <div class="col-sm-12">
                                        <h6>Prerequisite:</h6>
                                        <span v-for="(val,index) of relatedFeats.requires" :key="val">
                                            <a v-bind:href="'/#/feats/' + val.feat_id">{{val.feat_name}}</a><span v-if="index != Object.keys(relatedFeats.requires).length - 1">, </span>
                                        </span>
                                    </div>
                                </div>
                            </span>

                            <div class="row related-feat-bloc">
                                <div class="col-sm-12">
                                    <p class="card-text">{{feat}}</p>
                                </div>
                            </div>

                            <span v-if="relatedFeats && relatedFeats.required_for && relatedFeats.required_for.length > 0">
                                <div class="row related-feat-bloc">
                                    <div class="col-sm-12">
                                        <h6>Required For:</h6>
                                        <span v-for="(val,index) of relatedFeats.required_for" :key="val">
                                            <a v-bind:href="'/#/feats/' + val.feat_id">{{val.feat_name}}</a><span v-if="index != Object.keys(relatedFeats.required_for).length - 1">, </span>
                                        </span>
                                    </div>
                                </div>
                            </span>

                            <span v-if="relatedFeats && relatedFeats.same_feat && relatedFeats.same_feat.length > 0">
                                <div class="row related-feat-bloc">
                                    <div class="col-sm-12">
                                        <h6>Other Versions:</h6>
                                        <span v-for="(val,index) of relatedFeats.same_feat" :key="val">
                                            <a v-bind:href="'/#/feats/' + val.feat_id">{{val.version_name}}: {{val.book_name}}</a><span v-if="index != Object.keys(relatedFeats.same_feat).length - 1">, </span>
                                        </span>
                                    </div>
                                </div>
                            </span>
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