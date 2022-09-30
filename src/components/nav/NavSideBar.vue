<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

const logoutOnClick = () => {
  return logout({ returnTo: window.location.origin });
};

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
          <a class="btn btn-ghost normal-case text-xl">CookBookie</a>
        </div>
      </div>
      <slot></slot>
    </div>

    <div class="drawer-side">
      <label for="nav-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 overflow-y-auto w-60 bg-base-200 text-base-content">
        <!-- Sidebar content here -->
        <li><a class="btn btn-ghost normal-case text-xl">CookBookie</a></li>
        <div v-if="isAuthenticated">
          <li><a>{{user.name}}</a></li>
          <li @click="logoutOnClick"><a>Log out</a></li>
        </div>
        <li v-else @click="loginWithRedirect"><a>Log in</a></li>
      </ul>

    </div>
  </div>
</template>

  