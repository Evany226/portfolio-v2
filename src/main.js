import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import AOS from "aos";
import "aos/dist/aos.css";

new Vue({
  render: function (h) {
    return h(App);
  },
  mounted() {
    AOS.init();
  },
}).$mount("#app");
