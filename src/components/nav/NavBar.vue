<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

const logoutOnClick = () => {
  return logout({ returnTo: window.location.origin });
};

</script>

<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <a class="btn btn-ghost normal-case text-xl">CookBookie</a>
    </div>

    <div class="navbar-end">
      <!-- Desktop View -->
      <div class="hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li v-if="isAuthenticated" tabindex="0">
            <a>
              {{user.name}}
              <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul class="p-2">
              <li @click="logoutOnClick"><a>Log out</a></li>
            </ul>
          </li>
          <li v-else @click="loginWithRedirect"><a>Log in</a></li>
        </ul>
      </div>

      <!-- Mobile View -->
      <div class="dropdown dropdown-end">
        <!-- hamburger icon -->
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <div v-if="isAuthenticated" tabindex="0">
            <li><a>{{user.name}}</a></li>
            <li @click="logoutOnClick"><a>Log out</a></li>
          </div>

          <li v-else @click="loginWithRedirect"><a>Log in</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>


