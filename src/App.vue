<script setup lang="ts">
import AppNav from "./components/AppNav.vue";
import AppHeading from "./components/AppHeading.vue";
import AppEvent from "./components/AppEvent.vue";
</script>

<template>
  <div class="main-container"><AppNav /><AppHeading /><AppEvent /></div>
</template>

<style scoped>
.main-container {
  position: relative;
  width: 100%;
  height: 100%;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}
</style>
