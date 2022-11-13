<script setup>
import { useAuth0 } from "@auth0/auth0-vue";
import { watch } from "vue";
import { useRoute, useRouter } from 'vue-router';
import { MagnifyingGlassIcon, PlusIcon, XMarkIcon, FolderIcon } from '@heroicons/vue/20/solid';
import { addCollections, getUserCollections } from "../../apis/collections";

const { loginWithPopup, logout, user, isAuthenticated, } = useAuth0();
const route = useRoute();
const router = useRouter();
const currentRouteName = ref()
const showAddCollectionInput = ref(false)
const userCollections = ref([])

const getProfileImage = () => (user.value && user.value.picture ? user.value.picture : "");
const logoutOnClick = () => logout({ returnTo: window.location.origin });

watch(user, async () => {
  if (user.value) {
    try {
      if (user.value.sub) {
        const res = await getUserCollections(user.value.sub)
        userCollections.value = res.data.value
      }
    } catch (error) {
      console.log(error)
    }
  }
})

watch(
  () => route.name,
  () => {
    currentRouteName.value = route.name;
  },
);

const addNewCollection = async (event) => {
  const value = event.target.value
  const userId = user.value.sub

  if (value === "" || value === null) {
    alert("Collection requires a name")
  } else {
    const res = await addCollections(value, userId);
    if (res.response.value.status === 200) {
      showAddCollectionInput.value = false
      try {
        if (user.value.sub) {
          const res = await getUserCollections(user.value.sub)
          userCollections.value = res.data.value
        }
      } catch (error) {
        console.log(error)
      }
    } else if (res.response.value.status === 403) {
      alert(res.data.value.message)
    }
  }
}

const gotoCollectionPage = (collection) => {
  router.push(
    {
      path: '/collection/:userId/:name',
      name: 'Collection',
      params: { userId: collection.userId, name: collection.collectionName },
    }
  )
}

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
        <div class="navbar-end">
          <!-- The button to open modal -->
          <label for="popupmodal" class="modal-button">
            <MagnifyingGlassIcon class="mr-4 h-5 w-5 text-gray-400 modal-btn" aria-hidden="true" />
          </label>
          <!-- the modal -->
          <input type="checkbox" id="popupmodal" class="modal-toggle" />
          <label for="popupmodal" class="modal cursor-pointer">
            <label class="relative" for="">
              <GeneralSearchBar />
            </label>
          </label>
        </div>
      </div>
      <slot></slot>
    </div>

    <div class="drawer-side">
      <label for="nav-drawer" class="drawer-overlay"></label>
      <ul class="flex menu p-6 overflow-y-auto w-40 lg:w-60 bg-[#FFF9D8] text-base-content">
        <!-- <ul class="flex menu p-6 overflow-y-auto w-40 lg:w-48 bg-base-200 text-base-content"> -->
        <!-- Sidebar content here -->
        <div class="flex flex-col mt-3 w-full text-center">

          <div class="self-center @click:">
            <a href="/">
              <img src="/logo.png" />
            </a>

          </div>

          <!-- List of pages -->
          <div class="mt-6">
            <div v-if="isAuthenticated" class="flex flex-col">
              <div v-if="getProfileImage() !== ''">
                <div class="avatar center">
                  <div class="rounded-full w-12">
                    <a href="/profile">
                      <img :src="getProfileImage()" alt="" />
                    </a>
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
            </div>

            <div v-else>
              <li class="btn btn-primary" @click="loginWithPopup">
                Sign up / Log In
              </li>
            </div>

            <div class="mt-5"
              :class="currentRouteName === 'Home' ? 'border-l-2 border-primary active' : 'text-gray-600'">
              <a href="/">Home</a>
            </div>
            <div class="mt-3"
              :class="currentRouteName === 'MyKitchen' ? 'border-l-2 border-primary active' : 'text-gray-600'">
              <a href="/my-kitchen">My Kitchen</a>
            </div>
            <div class="mt-3"
              :class="currentRouteName === 'Supermarket' ? 'border-l-2 border-primary active' : 'text-gray-600'">
              <a href="/supermarket">Supermarket</a>
            </div>
          </div>

          <div v-if="isAuthenticated" class="mt-5">
            <div class="mt-5">
              <h1 class="font-bold">Saved recipes</h1>
              <div v-if="!showAddCollectionInput">
                <div class="flex justify-center">
                  <button @click="() => { showAddCollectionInput = true }"
                    class="flex mt-3 text-primary hover:text-orange-400">
                    <PlusIcon class="w-5" />
                    Add Collection
                  </button>
                </div>
              </div>
              <div v-else class="flex mt-3">
                <label class="flex">
                  <input @keyup.enter="addNewCollection" @blur="showAddCollectionInput = false" type="text"
                    placeholder="Collection Name" class="input input-xs w-32 p-0" autofocus />
                  <XMarkIcon @click="showAddCollectionInput = false" class="w-5 hover:cursor-pointer" />
                </label>
              </div>

              <div class="mt-1 max-h-56 overflow-y-auto">
                <div v-for="collection in userCollections">
                  <TextLink v-motion-fade @click="gotoCollectionPage(collection)">
                    <div class="flex justify-center text-left">
                      <div class="align-top">
                        <FolderIcon class="w-5 mr-1" />
                      </div>
                      {{ collection.collectionName }}
                    </div>
                  </TextLink>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div v-if="isAuthenticated" class="mx-auto mt-auto">
          <TextLink @click="logoutOnClick()">Sign out</TextLink>
        </div>
      </ul>

    </div>
  </div>
</template>
