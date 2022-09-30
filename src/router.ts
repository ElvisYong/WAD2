import { authGuard } from "@auth0/auth0-vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
      path: "/",
      name: "Home",
      component: () => import("./pages/home.vue"),
  },
  {
      path: "/about",
      name: "About",
      component: () => import("./pages/about.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router