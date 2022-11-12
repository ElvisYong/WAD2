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
    <div>

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