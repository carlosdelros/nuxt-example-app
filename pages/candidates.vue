<template>
  <div class="container-fluid">
    <AddCandidateButton />
    <div class="cards-container">
      <b-card-group deck>
        <IdCard
          v-for="candidate in candidates"
          :key="candidate._id"
          :candidate="candidate"
        />
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'navbar',
  async asyncData({ app, store }) {
    const candidates = await app.$axios.$get(
      'https://next.json-generator.com/api/json/get/NJgeeoTIF'
    )
    store.commit('candidates/load', candidates)
  },
  computed: {
    candidates() {
      return this.$store.state.candidates.candidates
    },
  },
}
</script>

<style>
.cards-container {
  display: flex;
  flex-direction: column;
  margin-top: 1em;
}
</style>
