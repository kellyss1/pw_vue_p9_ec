<script setup>
import router from './router';
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <nav>
      <RouterLink to="/">General</RouterLink>
    </nav>
  </div>
  <RouterView />

</template>

<style scoped></style>
