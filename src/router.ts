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
  },
  {
    path: "/my-recipes",
    name: "My Recipes",
    component: () => import("./pages/my-recipes.vue"),
  },
  {
    path: "/my-kitchen",
    name: "My Kitchen",
    component: () => import("./pages/my-kitchen.vue"),
  },
  {
    path: "/wishlist",
    name: "Cooking Wishlist",
    component: () => import("./pages/wishlist.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router