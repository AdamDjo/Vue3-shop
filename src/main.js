import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import { OhVueIcon, addIcons } from "oh-vue-icons";

import {
  CoHome, //home icon
  PrUser, //user icon
  LaShoppingCartSolid,
  FcLikePlaceholder, //shop icon
} from "oh-vue-icons/icons";

addIcons(CoHome, PrUser, LaShoppingCartSolid, FcLikePlaceholder);

createApp(App)
  .component("v-icon", OhVueIcon)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .mount("#app");
