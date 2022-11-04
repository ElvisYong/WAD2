<script setup>
import { onMounted } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { StarIcon } from '@heroicons/vue/20/solid';
import { addCollections, getUserCollections } from "../../apis/collections";

const { user, isAuthenticated } = useAuth0();
const props = defineProps(['recipe'])
const recipe = ref(props.recipe)
const userCollections = ref([])

onMounted(async () => {
  if (user.value) {
    try {
      if (user.value.sub) {
        const res = await getUserCollections(user.value.sub)
        console.log(res.data.value)
        userCollections.value = res.data.value
      }
    } catch (error) {
      console.log(error)
    }
  }
})

</script>

<template>
  <div class="flex flex-col lg:gap-16 xl:gap-28 lg:flex-row">
    <div class="flex flex-col order-last lg:order-first my-auto">
      <div>
        <!-- Recipe title -->
        <h1 class="font-bold text-2xl">{{ recipe.title }}</h1>

        <!-- Recipe Source -->
        <div>
          <a :href="recipe.sourceUrl">
            <TextLink>{{ recipe.sourceName }}</TextLink>
          </a>
        </div>

        <!-- Badges -->
        <div class="flex flex-row mt-3 gap-2">
          <div v-for="dishType in recipe.dishTypes">
            <div class="badge badge-secondary">{{ dishType }}</div>
          </div>
        </div>
      </div>

      <!-- Recipe stats -->
      <div class="mt-3">
        <RecipeStats :recipe=recipe />
      </div>
    </div>

    <div class="mx-auto md:mr-auto">
      <div class="indicator">
        <div class="indicator-item indicator-top">
          <label for="collectionsModal" class="btn btn-primary btn-circle">
            <StarIcon class="h-5 w-5" />
          </label>
        </div>
        <div class="avatar mr-0">
          <div class="w-96 rounded">
            <img :src="recipe.image" :alt="recipe.title" />
          </div>

        </div>
      </div>
    </div>

    <input type="checkbox" id="collectionsModal" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <h3 class="font-bold text-lg">Save To Collections</h3>
        <div v-if="isAuthenticated">
          <div v-if="userCollections.length === 0">
            <p class="mt-3">You have no collections yet</p>
          </div>
          <!-- checkbox -->
          <div v-else v-for="collection in userCollections">
            <div class="flex flex-row items-center gap-2">
              <input type="checkbox" :id="collection.collectionName" />
              <label :for="collection.collectionName">{{ collection.collectionName }}</label>
            </div>
          </div>
        </div>
        <div v-else>
          <p>Hello</p>
        </div>
        <div class="modal-action">
          <label for="collectionsModal" class="btn">Yay!</label>
        </div>
      </div>
    </div>

  </div>
</template>