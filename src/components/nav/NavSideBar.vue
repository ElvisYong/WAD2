<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { onMounted, watch } from "vue";
import { useRoute } from 'vue-router';

const {
  loginWithPopup, logout, user, isAuthenticated,
} = useAuth0();

const getProfileImage = () => (user.value.picture ? user.value.picture : "");
const logoutOnClick = () => logout({ returnTo: window.location.origin });
const route = useRoute();
const routeName = ref()

watch(
  () => route.name,
  () => {
    routeName.value = route.name;
  }
);
</script>

<template>
  <div class="drawer drawer-mobile">
    <input id="nav-drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content flex flex-col">
      <!-- Hidden nav bar for mobile -->
      <div class="navbar lg:hidden">
        <div class="navbar-start">
          <label for="nav-drawer" class="btn btn-ghost drawer-button lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <h1>4 Star Michelins</h1>
        </div>
      </div>
      <slot></slot>
    </div>

    <div class="drawer-side">
      <label for="nav-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-1/2 sm:w-1/4 lg:w-full bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <div class="flex flex-col mt-3 text-center">

          <div class="w-3/4 self-center">
            <img src="../../../public/logo.png" />
          </div>

          <!-- TODO: Update and add all the required pages -->
          <!-- List of pages -->
          <div class="mt-3 space-y-1">
            <div v-if="isAuthenticated">
              <li>
                <div class="avatar center">
                  <div class="w-16 rounded">
                    <img :src="getProfileImage()" alt="" />
                  </div>
                </div>
                <a>{{ user.name }}</a>
              </li>
              <li @click="logoutOnClick"><a>Log out</a></li>
            </div>

            <div v-else>
              <li class="btn btn-primary" @click="loginWithPopup">
                Sign up / Log In
              </li>
            </div>
            <li class="mt-3">
              <a :class="routeName === 'Home' ? 'active' : 'text-gray-600'">
                Home
              </a>
            </li>
            <li>
              <a :class="routeName === 'About' ? 'active' : 'text-gray-600'">My Recipes</a>
            </li>
            <li>
              <a :class="routeName === 'About' ? 'active' : 'text-gray-600'">My Kitchen</a>
            </li>
            <li>
              <a :class="routeName === 'About' ? 'active' : 'text-gray-600'">Cooking Wishlist</a>
            </li>
          </div>

          <!-- TODO: Add user specific actions here -->
        </div>
      </ul>

    </div>
  </div>
</template>
