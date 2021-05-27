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
              <th scope="col">Rulebooks</th>
              <th scope="col">Game Versions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="feat in feats"
              :key="feat.feat_name_id"
              v-on:click="goToFeat(feat.feat_ids[0])"
              class="clickable"
            >
              <td>{{ feat.feat_name }}</td>
              <td>{{ feat.short_description }}</td>
              <td>
                <span v-for="(val, index) of feat.book_names" :key="val">
                  {{ val }}
                  <span v-if="index != Object.keys(feat.book_names).length - 1">
                    ,
                  </span>
                </span>
              </td>
              <td>
                <span v-for="(val, index) of feat.version_names" :key="val">
                  {{ val }}
                  <span
                    v-if="index != Object.keys(feat.version_names).length - 1"
                  >
                    ,
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { FeatsAPI, } from "./feats.api";

export default {
  data() {
    return {
      loading: false,
      feats: null,
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
      FeatsAPI.getFeats()
        .then((response,) => {
          this.feats = response.data;
          this.loading = false;
        },)
        .catch((e,) => {
          this.error = e.toString();
        },);
    },
    goToFeat(id,) {
      this.$router.push(`/feats/${id}`,);
    },
  },
  props: [ "Feats", ],
};
</script>

<style lang="css"></style>
