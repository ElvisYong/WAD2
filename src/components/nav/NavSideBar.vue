<script setup lang="ts">
import { useAuth0 } from "@auth0/auth0-vue";
import { onMounted, watch } from "vue";
import { useRoute } from 'vue-router';
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid';

const {
  loginWithPopup, logout, user, isAuthenticated,
} = useAuth0();

const getProfileImage = () => (user.value.picture ? user.value.picture : "");
const logoutOnClick = () => logout({ returnTo: window.location.origin });
const route = useRoute();
const currentRouteName = ref()

watch(
  () => route.name,
  () => {
    currentRouteName.value = route.name;
  }
);
</script>

<template>
  <div class="drawer drawer-mobile">
    <input id="nav-drawer" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content flex flex-col">
      <!-- Mobile nav bar-->
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
        <!-- TODO: Restyle the searchbar to be a popup -->
        <div class="navbar-end">
          <!-- The button to open modal -->
          <label for="popupmodal" class="modal-button">
            <MagnifyingGlassIcon class="mr-4 h-5 w-5 text-gray-400 modal-btn" aria-hidden="true" />
          </label>
          <!-- the modal -->
          <input type="checkbox" id="popupmodal" class="modal-toggle" />
          <label for="popupmodal" class="modal cursor-pointer">
            <label class="modal-box relative" for="">
              <SearchBar />
              <!--hardcoded for now-->
              <h2 class="mt-4 mb-2">Recent Searches</h2>
              <h3 class="p-1">Beef Briyani</h3>
              <hr>
              <h3 class="p-1">Mushroom Galette</h3>
              <hr>
              <h3 class="p-1">Tonkatsu Ramen</h3>
            </label>
          </label>
          <!--avatar-->
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
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
            <img src="/logo.png" />
          </div>

          <!-- List of pages -->
          <div class="mt-3">
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

            <div class="mt-5"
              :class="currentRouteName === 'Home' ? 'border-l-2 border-primary active' : 'text-gray-600'">
              <a>Home</a>
            </div>
            <div class="mt-3"
              :class="currentRouteName === 'MyRecipes' ? 'border-l-2 border-primary active' : 'text-gray-600'">
              <a>My Recipes</a>
            </div>
            <div class="mt-3"
              :class="currentRouteName === 'MyKitchen' ? 'border-l-2 border-primary active' : 'text-gray-600'">
              <a>My Kitchen</a>
            </div>
            <div class="mt-3"
              :class="currentRouteName === 'CookingWishlist' ? 'border-l-2 border-primary active' : 'text-gray-600'">
              <a>Cooking Wishlist</a>
            </div>
          </div>

          <!-- TODO: Add user specific actions here -->
        </div>
      </ul>

    </div>
  </div>
</template>
