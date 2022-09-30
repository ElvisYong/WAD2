import { authGuard } from "@auth0/auth0-vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
      path: "/",
      name: "Dashboard",
      component: () => import("./pages/index.vue"),
      beforeEnter: authGuard,
  },
  {
      path: "/about",
      name: "About",
      component: () => import("./pages/about.vue"),
      beforeEnter: authGuard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router