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
                <h2>{{ feat.feat_name }}</h2>
              </div>
              <div class="card-body">
                <span
                  v-if="
                    relatedFeats &&
                    relatedFeats.requires &&
                    relatedFeats.requires.length > 0
                  "
                >
                  <div class="row feat-row">
                    <div class="col-sm-12">
                      <h6>Prerequisite:</h6>
                      <span v-for="(val, index) in relatedFeats.requires" v-bind:key="val.id">
                        <a v-bind:href="'/#/feats/' + val.feat_id">
                          {{ val.feat_name }}
                        </a>
                        <span
                          v-if="
                            index !=
                            Object.keys(relatedFeats.requires).length - 1
                          "
                        >
                          ,
                        </span>
                      </span>
                    </div>
                  </div>
                </span>

                <span v-if="featCategories && featCategories.length > 0">
                  <div class="row feat-row">
                    <div class="col-sm-12">
                      <h6>Categories:</h6>
                      <span v-for="(val, index) in featCategories" v-bind:key="val.id">
                        <!-- <a v-bind:href="'/#/feats/' + val.feat_id">{{val.feat_name}}</a><span v-if="index != Object.keys(featCategories).length - 1">, </span> -->
                        <span>{{ val.name }}</span>
                        <span
                          v-if="index != Object.keys(featCategories).length - 1"
                        >
                          ,
                        </span>
                      </span>
                    </div>
                  </div>
                </span>

                <div class="row feat-row">
                  <div class="col-sm-12">
                    <h5>Benefit</h5>
                    <p class="card-text">{{ feat.description }}</p>
                  </div>
                </div>

                <span v-if="feat.special">
                  <div class="row feat-row">
                    <div class="col-sm-12">
                      <h5>Special</h5>
                      <p class="card-text">{{ feat.special }}</p>
                    </div>
                  </div>
                </span>

                <span v-if="feat.normal">
                  <div class="row feat-row">
                    <div class="col-sm-12">
                      <h5>Normal</h5>
                      <p class="card-text">{{ feat.normal }}</p>
                    </div>
                  </div>
                </span>

                <span
                  v-if="
                    relatedFeats &&
                    relatedFeats.required_for &&
                    relatedFeats.required_for.length > 0
                  "
                >
                  <div class="row feat-row">
                    <div class="col-sm-12">
                      <h6>Required For:</h6>
                      <span v-for="(val, index) in relatedFeats.required_for" v-bind:key="val.id">
                        <a v-bind:href="'/#/feats/' + val.feat_id">
                          {{ val.feat_name }}
                        </a>
                        <span
                          v-if="
                            index !=
                            Object.keys(relatedFeats.required_for).length - 1
                          "
                        >
                          ,
                        </span>
                      </span>
                    </div>
                  </div>
                </span>

                <span
                  v-if="
                    relatedFeats &&
                    relatedFeats.same_feat &&
                    relatedFeats.same_feat.length > 0
                  "
                >
                  <div class="row feat-row">
                    <div class="col-sm-12">
                      <h6>Other Versions:</h6>
                      <span v-for="(val, index) in relatedFeats.same_feat" v-bind:key="val.id">
                        <a v-bind:href="'/#/feats/' + val.feat_id">
                          {{ val.version_name }}: {{ val.book_name }}
                        </a>
                        <span
                          v-if="
                            index !=
                            Object.keys(relatedFeats.same_feat).length - 1
                          "
                        >
                          ,
                        </span>
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
import { FeatAPI, } from "./feat.api";
export default {
  data() {
    return {
      loading: false,
      feat: null,
      relatedFeats: null,
      featCategories: null,
      error: null,
    };
  },
  mounted() {

    /*
     * Fetch the data when the view is created and the data is
     * Already being observed
     */
    this.fetchData();
  },
  watch: {
    // Call again the method if the route changes
    $route: "fetchData",
  },
  methods: {
    fetchData() {
      this.error = null;
      this.post = null;
      this.loading = true;
      FeatAPI.getFeat(this.$route.params.id,)
        .then((feat,) => {
          this.feat = feat.data;
          this.loading = false;
          FeatAPI.getRealtedFeats(this.$route.params.id,).then((relatedFeats,) => {
            this.relatedFeats = relatedFeats.data;
          },);
          FeatAPI.getFeatCategories(this.$route.params.id,).then((featCategories,) => {
            this.featCategories = featCategories.data;
          },);
        },)
        .catch((e,) => {
          this.error = e.toString();
        },);
    },
  },
  props: [ "Feat", ],
};
</script>

<style lang="css"></style>
