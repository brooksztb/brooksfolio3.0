<script setup lang="ts">
  
</script>
<template>
  <div>
    <div class="main-content-container">
      <div class="[ error main-content ] [ wrapper ]">
        <h1 class="msg">
          {{ message }}
        </h1>
        <nuxt-link to="/">Go to Home page</nuxt-link>
      </div>
    </div>
  </div>
</template>

<!-- <script>
export default {
  props: ['error'],
  computed: {
    message() {
      return this.error.statusCode === 404
        ? 'Page not found'
        : 'An error occurred'
    },
  },
}
</script> -->

<style scoped>
.error {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
}
</style>
