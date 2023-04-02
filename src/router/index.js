import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ShoppingView from "../views/ShoppingView.vue"; // Import the ShoppingView

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/shop", // Add a new route for the ShoppingView
    name: "shop",
    component: ShoppingView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
