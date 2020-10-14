<template>
  <div class="container">
    <div class="title">
      <h1>Welcome to Candidates Inc</h1>
    </div>
    <logo />
  </div>
</template>

<script>
export default {
  layout: 'navbar',
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 75vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
