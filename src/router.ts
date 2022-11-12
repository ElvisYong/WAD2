import { authGuard } from "@auth0/auth0-vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("./pages/home.vue"),
  },
  {
    path: "/recipe-info/:id",
    name: "RecipeInfo",
    component: () => import("./pages/recipe-info.vue"),
    props: true
  },
  {
    path: "/my-kitchen",
    name: "MyKitchen",
    component: () => import("./pages/my-kitchen.vue"),
  },
  {
    path: "/collection/:userId/:name",
    name: "Collection",
    component: () => import("./pages/collections.vue"),
  },
  {
    path: "/supermarket",
    name: "Supermarket",
    component: () => import("./pages/supermarket.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("./pages/profile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router