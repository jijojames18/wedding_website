<script setup lang="ts">
import AppNav from "./components/AppNav.vue";
</script>

<template>
  <div class="main-container"><AppNav /></div>
</template>

<style scoped>
.main-container {
  position: relative;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
</style>
