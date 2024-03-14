import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/home/HomePage.vue";
import Shop from "../views/cart/ShoppingPage.vue";
import Whishlist from "../views/whishlist/WhishlistPage.vue";
import Product from "../views/product/ProductPage.vue";
const routes = [
  {
    path: "/",
    name: " ",
    component: Home,
  },
  {
    path: "/shop",
    name: "Shop",
    component: Shop,
  },
  {
    path: "/whishlist",
    name: "Whishlist",
    component: Whishlist,
  },
  { path: "/product/:id", name: "Product", component: Product },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
