<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <nuxt-link to="/" class="navbar-brand"> Candidates Inc </nuxt-link>
      <b-navbar-nav>
        <b-nav-item to="/" exact-active-class="active">Home</b-nav-item>
        <b-nav-item to="/candidates" active-class="active"
          >Candidates</b-nav-item
        >
      </b-navbar-nav>
    </b-navbar>
    <nuxt />
  </div>
</template>
