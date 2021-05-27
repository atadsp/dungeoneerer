<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <label for="charName">Enter Character Name</label>
        <br />
        <input class="name" id="charName" type="text" />
        <br />
        <button
          class="name_submit btn btn-primary"
          type="submit"
          value="GENERATE"
        >
          GENERATE
        </button>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12"></div>
    </div>

    <div class="row">
      <div class="col-sm-8">
        <label>Character Information</label>
        <div id="characterInfo"></div>
        <label>Special Abilties</label>
        <div id="specialAbilities"></div>
      </div>
      <div class="col-sm-4">
        <label>Attribute Bonuses</label>
        <ul id="attirubteBonus"></ul>
        <label>Skill List</label>
        <ul id="skillList"></ul>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-8">
        <label>Birth Information</label>
        <div id="birthInfo"></div>
      </div>
      <div class="col-sm-4">
        <label>Traits</label>
        <ul id="traitInfo"></ul>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <label>Birth Events</label>
        <div id="birthEvent"></div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <label>Special Notes and Considerations:</label>
        <div id="playerNotes"></div>
      </div>
    </div>

    <div class="row">
      <div class="col-sm-12">
        <label>NPC Information</label>
        <div id="npcInfo"></div>
      </div>
    </div>
  </div>
</template>

<script>
// Import {FeatAPI} from "./feat.api"
export default {
  data() {
    return {};
  },
  watch: {},
  methods: {},
  props: [ "CharacterGenerator", ],
};
</script>

<style lang="css"></style>
