<script setup>
import { onMounted, ref, toRefs, defineProps } from "vue";

import {
  generateWayPoint,
  getMapInstance,
  addInfoWindow,
  EVENT_CHURCH,
  EVENT_HALL,
} from "@/utils.js";

const googleMap = ref(null);
const eventElem = ref(null);

const props = defineProps({
  windowWidth: Number,
});

const { windowWidth } = toRefs(props);

onMounted(() => {
  if (!window.google || !window.google.maps) {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${
      import.meta.env.VITE_APP_GOOGLE_MAPS_API
    }`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      const churchCoords = { lat: 8.498515, lng: 76.950596 };
      const receptionCoords = { lat: 8.5028359, lng: 76.9599708 };
      const mapCenterCoords = { lat: 8.5015468, lng: 76.9533447 };

      const map = getMapInstance(googleMap, mapCenterCoords);
      addInfoWindow(map, churchCoords, EVENT_CHURCH, windowWidth.value);
      addInfoWindow(map, receptionCoords, EVENT_HALL, windowWidth.value);
    });
  }

  generateWayPoint(eventElem);
});
</script>

<template>
  <div class="cover">
    <div class="container animate-box" ref="eventElem">
      <div class="row">
        <div class="col-md-8 offset-md-2 text-center heading-container">
          <h2>Events</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="feature">
            <span class="icon">
              <i class="icon-calendar"></i>
            </span>
            <div class="feature-heading">
              <h3>When and Where?</h3>
            </div>
            <p>
              Wedding will be at St. Peter's Jacobite Syrian Orthodox Simhasana
              Cathedral Statue at 11.00 AM on Monday 26th December 2022.
            </p>
          </div>

          <div class="feature">
            <span class="icon">
              <i class="icon-pencil"></i>
            </span>
            <div class="feature-heading">
              <h3>Q & A</h3>
              <p>
                <b>How to reach?</b> <br />
                The church is in the heart of the city, just behind Secretariat.
              </p>
              <p>
                <b>When is the reception?</b> <br />
                Reception will take place right after the wedding at Sri Mulam
                Club Vazhuthacaud
              </p>
              <p>
                <b>Where should I park at the church?</b> <br />
                Parking space is limited around the church, so please plan
                accordingly if you are going to attend the wedding.
              </p>
              <p>
                <b>Where should I park at the reception venue?</b> <br />
                The venue has enough slots inside the premises as well as
                outside.
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div>
            <div
              class="google-map-container"
              id="google-map"
              ref="googleMap"
            ></div>
            <div class="overlay"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/styles/common.scss";

.cover {
  --animate-delay: 0s;
  background: rgba(0, 0, 0, 0.04);
  .feature {
    float: left;
    width: 100%;
    margin-bottom: 30px;
    position: relative;
    &:last-child {
      margin-bottom: 0;
    }
    .feature-heading {
      h3 {
        line-height: 2.2;
        font-family: "Sacramento", Arial, serif;
        font-size: 30px;
      }
    }
    .icon {
      float: left;
      margin-right: 5%;
      width: 54px;
      height: 54px;
      background: #fff;
      display: table;
      text-align: center;
      -webkit-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75);
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      border-radius: 50%;
      i {
        display: table-cell;
        vertical-align: middle;
        font-size: 30px;
        color: #f14e95;
      }
      .icon-calendar:before {
        content: "\e979";
      }
      .icon-pencil:before {
        content: "\e9f3";
      }
    }
  }

  .google-map-container {
    height: 565px;
    clear: both;
  }

  @media (max-width: 768px) {
    .feature .icon {
      margin-right: 5%;
    }
  }
}
</style>
