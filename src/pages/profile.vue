<script setup>
import { getUserCollectionByName, deleteUserCollection } from "../apis/collections"
import { useAuth0 } from "@auth0/auth0-vue";
import { watch } from "vue";

useHead({
  title: "Profile Page",
});

const { user, isAuthenticated, } = useAuth0();
const getProfileImage = () => (user.value && user.value.picture ? user.value.picture : "");
const logoutOnClick = () => logout({ returnTo: window.location.origin });
// const username = ref("Create An Account")

// onMounted(async () => {
//   if (isAuthenticated && user.value) {
//     username.value = `${user.value.name}!`
//   }
// })

// watch(user, async () => {
//   if (user.value) {
//     username.value = `${user.value.name}!`
//   }
// })

</script>

<template>
    <!-- <div class="hero h-56 bg-grey mt-10 ml-5">
        <div>
        display profile picture and username beside it
            <div class="flex flex-row justify-center items-center">
                <div class="img_logout mr-2">
                    <img class="w-20 h-20 rounded-full" :src="getProfileImage()" alt="Profile Picture">
                </div>
                <div class="username ml-2">
                    <h1 class="text-2xl font-bold ml-4">{{ user.name }}</h1>
                    <p>Tell me more about yourself</p>
                </div>
            </div>
        </div>
    </div> -->

    <div class="hero h-56 bg-light mx-8 justify-left">
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


    
        <!-- <div v-if="isAuthenticated" class="flex flex-col">
            <div v-if="getProfileImage() !== ''">
                <div class="avatar">
                    <div class="rounded-full w-50">
                        <img :src="getProfileImage()" alt="" />
                    </div>
                </div>
            </div>
            <div v-else>
                <div class="avatar placeholder">
                    <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                    <span>{{ user.name ? user.name[0] : '?' }}</span>
                    </div>
                </div>
            </div>
                <a class=" self-center" href="/profile">{{ user.name }}</a>
            </div>-->
        <!-- <div class="userinfo">
            <h3>{{username}}</h3>
        </div> -->
</template>