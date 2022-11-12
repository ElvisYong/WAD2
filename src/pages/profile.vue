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
    <div class="mx-auto">
      <div class="hero h-56 bg-light justify-left">
        <div class="hero-content">
          <div class="grid grid-cols-2 gap-2 content-center">
            <div>
              <div class="img_logout mr-2">
                <img class="w-20 h-20 rounded-full justify-right" :src="getProfileImage()" alt="Profile Picture">
              </div>
            </div>
            <div>
              <div class="username ml-2 text-center">
                <h1 class="text-2xl font-bold ml-4">{{ user.name }}</h1>
                <p>Tell me more about yourself</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mx-auto">
        <h1 class="text-2xl text-left">Collections</h1>
        <CollectionsGrid />
    </div>

  </div>

</template>