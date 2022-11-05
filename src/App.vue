<script setup>
import { onMounted, ref } from "vue";

import AppNav from "./components/AppNav.vue";
import AppHeading from "./components/AppHeading.vue";
import AppEvent from "./components/AppEvent.vue";
import AppGallery from "./components/AppGallery.vue";

const isLoading = ref(true);
const windowWidth = ref(0);

onMounted(() => {
  setTimeout(() => {
    // Set loading to false after load
    isLoading.value = false;
  }, 1000);
});

const handleResize = function ({ width }) {
  windowWidth.value = width;
};
</script>

<template>
  <div>
    <div class="loader" v-if="isLoading"></div>
    <div class="main-container" v-else>
      <resize-observer @notify="handleResize" :showTrigger="true" />
      <AppNav />
      <AppHeading />
      <AppEvent :windowWidth="windowWidth" />
      <AppGallery :windowWidth="windowWidth" />
    </div>
  </div>
</template>

<style scoped>
.main-container {
  position: relative;
  width: 100%;
  height: 100%;
  transition: 0.5s;
}
.loader {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: url(@/assets/loader.gif) center no-repeat;
}
</style>
