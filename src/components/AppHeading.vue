<script setup>
import { onMounted, ref } from "vue";
import { atcb_action } from "add-to-calendar-button";

const remainderButtonConfig = {
  name: "Add the title of your event",
  description: "A nice description does not hurt",
  startDate: "2022-12-26",
  endDate: "2022-12-26",
  startTime: "11:00",
  endTime: "14:00",
  location:
    "Sri Mulam Club, GX36+33G, CV Raman Pillai Rd, Near Tagore Theatre Thiruvananthapuram, Vazhuthacaud, Thiruvananthapuram, Kerala 695010, India",
  label: "Add to Calendar",
  options: [
    "Apple",
    "Google",
    "iCal",
    "Microsoft365",
    "MicrosoftTeams",
    "Outlook.com",
    "Yahoo",
  ],
  timeZone: "Asia/Kolkata",
  trigger: "click",
  inline: true,
  listStyle: "modal",
  iCalFileName: "Reminder-Event",
};

const saveDateButton = ref(null);
const wayPointElem = ref(null);

const saveDateClick = function () {
  atcb_action(remainderButtonConfig, saveDateButton.value);
};

onMounted(() => {
  var d = new Date("2022-12-26");
  window.simplyCountdown(".simply-countdown", {
    year: d.getFullYear(),
    month: d.getMonth() + 1,
    day: d.getDate(),
    countUp: true,
  });
  new window.Waypoint({
    element: wayPointElem.value,
    handler: function () {
      wayPointElem.value.classList.add("animate__animated");
      wayPointElem.value.classList.add("animate__fadeInUp");
      wayPointElem.value.classList.add("animate__fast");
    },
  });
});
</script>
<template>
  <header class="cover" role="banner" data-stellar-background-ratio="0.5">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2 text-center">
          <div class="title-container">
            <div class="title animate-box" ref="wayPointElem">
              <h1>User A &amp; User B</h1>
              <h2>We Are Getting Married</h2>
              <div class="simply-countdown"></div>
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
.cover {
  background-image: url(@/assets/img_bg_2.jpg);
  height: 900px;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  width: 100%;

  .title-container,
  .title {
    height: 900px;
    display: table;
    width: 100%;
  }

  .title {
    display: table-cell !important;
    vertical-align: middle;
    h1,
    h2 {
      margin: 0;
      padding: 0;
      color: white;
    }
    h1 {
      margin-bottom: 0px;
      font-size: 100px;
      line-height: 1.5;
      font-family: "Sacramento", Arial, serif;
    }
    h2 {
      font-size: 20px;
      line-height: 1.5;
      margin-bottom: 30px;
    }
    .btn {
      padding: 15px 20px;
      background: #fff !important;
      color: #f14e95;
      border: none !important;
      font-size: 14px;
      text-transform: uppercase;
      &:hover {
        background: #fff !important;
        -webkit-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75) !important;
        -moz-box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75) !important;
        box-shadow: 0px 14px 30px -15px rgba(0, 0, 0, 0.75) !important;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .cover {
    height: 600px;
    .title-container,
    .title {
      height: 600px;
      h1 {
        font-size: 40px;
      }
    }
  }
}

@media screen and (max-width: 480px) {
  .cover {
    .title-container,
    .title {
      h1 {
        font-size: 30px;
      }
      h2 {
        font-size: 16px;
      }
    }
  }
}
</style>
