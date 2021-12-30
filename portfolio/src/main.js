import Vue from "vue";
import App from "./App.vue";
import VueSmoothScroll from "vue2-smooth-scroll";
Vue.use(VueSmoothScroll);
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
