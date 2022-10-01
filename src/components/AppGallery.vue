<script setup>
import { onMounted, ref } from "vue";
import { Carousel3d, Slide } from "vue3-carousel-3d";

const getImageUrl = function (i) {
  return new URL(`../assets/g${i}.jpg`, import.meta.url).href;
};

const slides = 3;

const wayPointGallery = ref(null);
const wayPointEvent = ref(null);

onMounted(() => {
  console.log(wayPointEvent.value);
  new window.Waypoint({
    element: wayPointEvent.value,
    handler: function () {
      wayPointEvent.value.classList.add("animate__animated");
      wayPointEvent.value.classList.add("animate__fadeIn");
      wayPointEvent.value.classList.add("animate__fast");

      wayPointGallery.value.classList.add("animate__animated");
      wayPointGallery.value.classList.add("animate__fadeIn");
      wayPointGallery.value.classList.add("animate__fast");
    },
  });
});
</script>

<template>
  <div class="gallery">
    <div class="container">
      <div class="row">
        <div
          class="col-md-8 offset-md-2 text-center heading-container"
          ref="wayPointEvent"
        >
          <h2>Wedding Gallery</h2>
        </div>
      </div>
      <div class="row" ref="wayPointGallery">
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

<style lang="scss">
.gallery {
  background-image: url(@/assets/img_bg_1.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  padding: 7em 0;
  clear: both;

  .heading-container {
    margin-bottom: 5em;
    h2 {
      font-size: 60px;
      margin-bottom: 10px;
      line-height: 1.5;
      font-weight: bold;
      color: #f14e95;
      font-family: "Sacramento", Arial, serif;
    }
  }
}
@media screen and (max-width: 768px) {
  .gallery {
    padding: 3em 0;
    .heading-container h2 {
      font-size: 40px;
    }
  }
}
</style>
