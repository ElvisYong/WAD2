<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import { watch } from "vue";

useHead({
  title: "Profile Page",
});

const { user, isAuthenticated, } = useAuth0();
const getProfileImage = () => (user.value && user.value.picture ? user.value.picture : "");
const logoutOnClick = () => logout({ returnTo: window.location.origin });

</script>

<template>
  <div class="flex flex-col">
    <div class="mr-20">
      <div class="hero h-56 bg-light">
        <div class="hero-content justify-items-start">
          <div class="grid grid-cols-2 gap-2">
            <div class="flex img justify-end">
              <img class="w-20 h-20 rounded-full" :src="getProfileImage()" alt="Profile Picture">
            </div>
            <div class="username ml-2 text-center align-center">
              <h1 class="text-2xl font-bold ml-4">{{ user.name }}</h1>
              <p>Tell me more about yourself</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="hero bg-light">
      <div class="hero-content text-center">
        <div class="mx-auto">
          <h1 class="mb-6 font-bold text-2xl text-center lg:text-left">Collections</h1>
          <div class="mt-6 justify-center">
            <CollectionsGrid class="justify-center" />
          </div>
        </div>
      </div>
    </div>

  </div>

</template>