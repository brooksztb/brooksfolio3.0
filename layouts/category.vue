<script setup lang="ts">
  
</script>
<template>
  <div>
    <div class="[ layout-wrapper ] [ transition-colors-300 ]">
      <the-navigation></the-navigation>
      <div class="main-content-container">
        <main id="content" class="[ main-content ] [ wrapper ]">
          <nuxt keep-alive />
        </main>
      </div>
    </div>
    <the-footer></the-footer>
  </div>
</template>


<style scoped></style>
