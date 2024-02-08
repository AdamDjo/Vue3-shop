import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import Shop from "../views/ShoppingBasket.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
