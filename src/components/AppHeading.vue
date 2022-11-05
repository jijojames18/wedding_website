<script setup>
import { onMounted, ref } from "vue";
import { atcb_action } from "add-to-calendar-button";

import {
  generateWayPoint,
  remainderButtonConfig,
  simplyCountdownConfig,
} from "@/utils.js";

const saveDateButton = ref(null);
const simplyCountdownElem = ref(null);
const wayPointElem = ref(null);

const saveDateClick = function () {
  atcb_action(remainderButtonConfig, saveDateButton.value);
};

onMounted(() => {
  window.simplyCountdown(simplyCountdownElem.value, simplyCountdownConfig);
  generateWayPoint(wayPointElem, "animate__fadeInUp");
});
</script>
<template>
  <header class="cover" role="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2 text-center">
          <div class="title-container">
            <div class="title animate-box" ref="wayPointElem">
              <h1>Jothi &amp; Jijo</h1>
              <h2>We Are Getting Married</h2>
              <div class="simply-countdown" ref="simplyCountdownElem"></div>
              <p>
                <a
                  href="#"
                  class="btn btn-default btn-sm"
                  ref="saveDateButton"
                  @click="saveDateClick"
                >
                  Save the date
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "@/styles/common.scss";

.cover {
  background-image: url(@/assets/bg_heading_large.jpg);
  padding-top: 150px;
  background-position-y: 65%;
}

@media screen and (min-width: 800px) {
  .cover {
    .offset-md-2 {
      margin-left: 0;
    }
  }
}

@media screen and (min-width: 300px) {
  .cover {
    background-position-x: 78%;
    .offset-md-2 {
      margin-left: 0;
    }
  }
}

@media screen and (orientation: portrait) {
  .cover {
    height: 100vh;
  }
}

@media screen and (max-width: 768px) {
  .cover {
    padding: $padding-cover-small;
  }
}
</style>
