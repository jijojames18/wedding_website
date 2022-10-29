<script setup>
import { onMounted, ref, defineProps, toRefs, watchEffect } from "vue";
import { Carousel3d, Slide } from "vue3-carousel-3d";

import { generateWayPoint } from "@/utils.js";

const props = defineProps({
  windowWidth: String,
});

const { windowWidth } = toRefs(props);

const width = ref(640);
const height = ref(360);

watchEffect(() => {
  if (windowWidth.value >= 1000) {
    width.value = 800;
    height.value = 530;
  } else if (windowWidth.value >= 800) {
    width.value = 600;
    height.value = 400;
  } else if (windowWidth.value >= 600) {
    width.value = 540;
    height.value = 340;
  } else if (windowWidth.value >= 400) {
    width.value = 340;
    height.value = 220;
  } else {
    width.value = 260;
    height.value = 170;
  }

  console.log(windowWidth.value);
});

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
          <h2>Gallery</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <carousel-3d
            :autoplay="true"
            :width="width"
            :height="height"
            :autoplayTimeout="4000"
          >
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

.cover {
  --animate-delay: 0s;
  background-image: url(@/assets/bg_gallery.jpg);
  .carousel-3d-slide {
    border-width: 0px !important;
    border-radius: 30px;
  }
}
</style>
