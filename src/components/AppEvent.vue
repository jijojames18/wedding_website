<script setup>
import { onMounted, ref } from "vue";

const googleMapChurch = ref(null);
const googleMapReception = ref(null);

const getMapInstance = function (mapRef, coords) {
  return new window.google.maps.Map(mapRef.value, {
    zoom: 19,
    center: new window.google.maps.LatLng(coords.lat, coords.lng),
  });
};

const addMarker = function (map, coords) {
  return new window.google.maps.Marker({
    position: coords,
    map,
  });
};

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

      const mapChurch = getMapInstance(googleMapChurch, churchCoords);
      addMarker(mapChurch, churchCoords);
      const mapReception = getMapInstance(googleMapReception, receptionCoords);
      addMarker(mapReception, receptionCoords);
    });
  }
});
</script>

<template>
  <div class="cover" style="background-image: url(assets/img_bg_3.jpg)">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2 text-center heading-container">
          <h2>Wedding Events</h2>
        </div>
      </div>
      <div class="row">
        <div class="title-container">
          <div class="title">
            <div class="col-md-10 offset-md-1">
              <div class="col-md-6 col-sm-6 text-center event-container">
                <div class="event-wrap">
                  <h3>Wedding</h3>
                  <div class="event-col">
                    <i class="icon-clock"></i>
                    <span>11:00 AM</span>
                  </div>
                  <div class="event-col">
                    <i class="icon-calendar"></i>
                    <span>26/12/2022</span>
                  </div>
                  <div class="event-col event-text-center">
                    <i class="icon-location"></i>
                    <span>
                      St. Peter's Jacobite Syrian Orthodox Simhasana Cathedral
                    </span>
                  </div>
                  <div
                    class="google-map-container"
                    id="google-map-church"
                    ref="googleMapChurch"
                  ></div>
                </div>
              </div>
              <div class="col-md-6 col-sm-6 text-center event-container">
                <div class="event-wrap animate-box">
                  <h3>Reception</h3>
                  <div class="event-col">
                    <i class="icon-clock"></i>
                    <span>1:00 PM</span>
                  </div>
                  <div class="event-col">
                    <i class="icon-calendar"></i>
                    <span>26/12/2022</span>
                  </div>
                  <div class="event-col event-text-center">
                    <i class="icon-location"></i>
                    <span>
                      Sri Mulam Club CV Raman Pillai Rd, Near Tagore Theatre
                    </span>
                  </div>
                  <div
                    class="google-map-container"
                    id="google-map-reception"
                    ref="googleMapReception"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cover {
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  padding: 7em 0;
  float: left;
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
    span {
      color: rgba(255, 255, 255, 0.5);
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 2px;
      font-weight: 600;
    }
    p {
      font-size: 18px;
      line-height: 1.5;
      color: #828282;
    }
    span {
      text-transform: uppercase;
      font-size: 13px;
      letter-spacing: 2px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.4);
    }
  }

  .title-container,
  .title {
    height: 700px;
    display: table;
    width: 100%;
    .event-container {
      float: left;
      padding: 0 15px;
      .event-wrap {
        border: 2px solid rgba(255, 255, 255, 0.5);
        background: rgba(255, 255, 255, 0.1);
        padding: 30px;
        width: 100%;
        float: left;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        -ms-border-radius: 4px;
        border-radius: 4px;
        h3 {
          font-size: 20px;
          color: #fff;
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
          display: block;
          padding-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }
        p,
        span {
          display: block;
          color: rgba(255, 255, 255, 0.8);
        }
        i {
          color: white;
          font-size: 20px;
        }
        .event-col {
          width: 50%;
          float: left;
          margin-bottom: 30px;
          .icon-clock:before {
            content: "\e014";
          }
          .icon-calendar:before {
            content: "\e979";
          }
          .icon-location:before {
            content: "\e070";
          }
        }
        .event-text-center {
          width: 100%;
        }
        .google-map-container {
          height: 320px;
          clear: both;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .heading-container h2 {
    font-size: 40px;
  }
  .title-container,
  .title {
    height: inherit;
    .event-wrap {
      margin-bottom: 10px;
    }
  }
}
</style>
