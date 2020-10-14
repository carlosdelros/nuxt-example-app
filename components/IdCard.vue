<template>
  <div v-if="candidate" class="id-card">
    <b-card header-tag="header" footer-tag="footer">
      <template v-slot:header>
        <h6 class="mb-0">Company: {{ candidate.company }}</h6>
        <b-badge :variant="candidate.isActive ? 'success' : 'secondary'">
          <span v-show="candidate.isActive">Active</span>
          <span v-show="!candidate.isActive">Inactive</span>
        </b-badge>
      </template>
      <div class="avatar-name">
        <b-avatar src="https://placekitten.com/300/300" size="6rem"></b-avatar>
        <b-card-title>{{ name }}</b-card-title>
        <b-card-text>{{ candidate.address }}</b-card-text>
      </div>
      <b-list-group flush>
        <b-list-group-item
          ><strong>Age:</strong> {{ candidate.age }}</b-list-group-item
        >
        <b-list-group-item
          ><strong>Eye Color:</strong>
          {{ candidate.eyeColor }}</b-list-group-item
        >
        <b-list-group-item
          ><strong>Email:</strong> {{ candidate.email }}</b-list-group-item
        >
        <b-list-group-item
          ><strong>Phone:</strong> {{ candidate.phone }}</b-list-group-item
        >
      </b-list-group>
      <b-card-body>
        {{ candidate.about }}
      </b-card-body>
      <template v-slot:footer>
        <em>ID: {{ candidate._id }}</em>
        <b-button variant="danger" @click="remove">Remove</b-button>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    candidate: {
      type: Object,
      default: null,
    },
  },
  computed: {
    name() {
      return `${this.candidate.name.first} ${this.candidate.name.last}`
    },
  },
  methods: {
    remove() {
      this.$store.commit('candidates/remove', this.candidate)
    },
  },
}
</script>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
}
.card-footer {
  display: flex;
  justify-content: space-between;
}
.id-card {
  display: flex;
  margin-bottom: 1em;
  width: 480px;
}

.avatar-name {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
