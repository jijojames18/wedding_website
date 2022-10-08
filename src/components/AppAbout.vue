<script setup>
import { onMounted, ref } from "vue";

const storyElem = ref(null);

onMounted(() => {
  new window.Waypoint({
    element: storyElem.value,
    handler: function () {
      storyElem.value.classList.add("animate__animated");
      storyElem.value.classList.add("animate__fadeIn");
      storyElem.value.classList.add("animate__fast");
    },
    offset: 200,
  });
});

const groomURL = new URL(`../assets/groom.jpg`, import.meta.url).href;
const brideURL = new URL(`../assets/bride.jpg`, import.meta.url).href;
</script>

<template>
  <div class="story">
    <div class="container animate-box" ref="storyElem">
      <div class="row">
        <div class="col-md-8 offset-md-2 text-center heading-container">
          <h2>Hello!</h2>
          <h3>December 26th, 2022 Trivandrum, Kerala</h3>
          <p>We invited you to celebrate our wedding</p>
        </div>
      </div>
      <div class="couple-wrap">
        <div class="couple-half">
          <div class="groom">
            <img :src="groomURL" alt="groom" class="img-responsive" />
          </div>
          <div class="desc-groom">
            <h3>User A</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove
            </p>
          </div>
        </div>
        <p class="heart text-center"><i class="icon-heart2"></i></p>
        <div class="couple-half">
          <div class="bride">
            <img :src="brideURL" alt="bride" class="img-responsive" />
          </div>
          <div class="desc-bride">
            <h3>User B</h3>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.story {
  padding: 7em 0;
  clear: both;
  .container::before {
    content: "";
    display: table;
  }
  .container::after {
    content: " ";
    display: table;
    clear: both;
  }
  .heading-container {
    margin-bottom: 5em;
    h2 {
      font-size: 40px;
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

  .couple-wrap {
    width: 90%;
    margin: 0 auto;
    position: relative;

    .couple-half {
      width: 50%;
      float: left;
      h3 {
        font-family: "Sacramento", Arial, serif;
        color: #f14e95;
        font-size: 30px;
      }
      .groom,
      .bride {
        float: left;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        border-radius: 50%;
        width: 150px;
        height: 150px;
        img {
          width: 150px;
          height: 150px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          -ms-border-radius: 50%;
          border-radius: 50%;
        }
      }

      .groom {
        float: right;
        margin-right: 5px;
      }
      .bride {
        float: left;
        margin-left: 5px;
      }

      .desc-groom {
        padding-right: 180px;
        text-align: right;
      }
      .desc-bride {
        padding-left: 180px;
        text-align: left;
      }
    }

    .heart {
      position: absolute;
      top: 4em;
      left: 0;
      right: 0;
      z-index: 99;
      animation: pulse 1s ease infinite;
    }
    .heart i {
      font-size: 20px;
      background: #fff;
      padding: 20px;
      color: #f14e95;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      border-radius: 50%;
    }

    .icon-heart2:before {
      content: "\e9b5";
    }
  }
}

@media screen and (max-width: 768px) {
  .story {
    padding: 3em 0;
    .container {
      margin: 0;
      max-width: 100%;
    }
    .heading-container h2 {
      font-size: 40px;
    }
    .couple-wrap {
      width: 100%;
      .couple-half {
        width: 100%;
      }
      .heart {
        display: none;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .story {
    .couple-wrap {
      .couple-half {
        .groom,
        .bride {
          width: 100%;
          height: 140px;
          margin-left: 0;
          margin-right: 0;
          img {
            width: 120px;
            height: 120px;
            margin: 0 auto;
            display: block;
            max-width: 100%;
          }
        }
        .desc-groom {
          padding-right: 0;
          text-align: center;
        }
        .desc-bride {
          padding-left: 0;
          text-align: center;
        }
      }
    }
  }
}
</style>
