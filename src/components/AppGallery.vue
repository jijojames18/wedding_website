<script setup>
import { onMounted, ref } from "vue";
import { Carousel3d, Slide } from "vue3-carousel-3d";

import { generateWayPoint } from "@/utils.js";

const getImageUrl = function (i) {
  return new URL(`../assets/g${i}.jpg`, import.meta.url).href;
};
const slides = 3;
const galleryElem = ref(null);

onMounted(() => {
  generateWayPoint(galleryElem);
});
</script>

<template>
  <div class="cover">
    <div class="container animate-box" ref="galleryElem">
      <div class="row">
        <div class="col-md-8 offset-md-2 text-center heading-container">
          <h2>Wedding Gallery</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <carousel-3d :autoplay="true" :width="640" :height="360">
            <slide v-for="(slide, i) in slides" :key="i" :index="i">
              <img :src="getImageUrl(i + 1)" />
            </slide>
          </carousel-3d>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/common.scss";
</style>
