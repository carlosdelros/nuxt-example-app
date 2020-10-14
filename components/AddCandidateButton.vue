<template>
  <div>
    <b-button
      v-b-modal.modal-prevent-closing
      size="md"
      class="button"
      variant="info"
      >Add Candidate</b-button
    >
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      title="Add Candidate"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group label="Company" label-for="company-input">
          <b-form-input
            id="company-input"
            v-model="company"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Name" label-for="name-input">
          <b-form-input id="name-input" v-model="name" required></b-form-input>
        </b-form-group>
        <b-form-group label="Address" label-for="address-input">
          <b-form-input
            id="address-input"
            v-model="address"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Eye Color" label-for="eye-color-input">
          <b-form-input
            id="eye-color-input"
            v-model="eyeColor"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Age" label-for="age-input">
          <b-form-input id="age-input" v-model="age" required></b-form-input>
        </b-form-group>
        <b-form-group label="Email" label-for="age-input">
          <b-form-input
            id="email-input"
            v-model="email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Phone" label-for="age-input">
          <b-form-input
            id="phone-input"
            v-model="phone"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="About" label-for="age-input">
          <b-form-input
            id="about-input"
            v-model="about"
            required
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      company: '',
      name: '',
      address: '',
      eyeColor: '',
      age: '',
      email: '',
      phone: '',
      about: '',
    }
  },
  methods: {
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Push the candidate to store
      this.$store.commit('candidates/add', {
        company: this.company,
        name: this.name,
        address: this.address,
        eyeColor: this.eyeColor,
        age: this.age,
        email: this.email,
        phone: this.phone,
        about: this.about,
      })
      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide('modal-prevent-closing')
      })
    },
  },
}
</script>

<style>
.button {
  margin-top: 1em;
}
</style>
