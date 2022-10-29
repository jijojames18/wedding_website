import { createApp } from "vue";
import Vue3Resize from "vue3-resize";
import App from "./App.vue";

// JS Libraries
import "~/simplycountdown.js/dev/simplyCountdown.js";
import "~/waypoints/lib/noframework.waypoints.min.js";

// CSS
import "./styles/main.scss";

createApp(App).use(Vue3Resize).mount("#app");
