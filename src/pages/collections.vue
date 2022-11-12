<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useToast } from "vue-toastification";
import { getUserCollectionByName, deleteUserCollection } from "../apis/collections"
import { getRecipesInBulk } from "../apis/recipes"
import { TrashIcon } from '@heroicons/vue/20/solid'

const route = useRoute();
const collection = ref(null)
const recipes = ref(null)
const toast = useToast();

const fetchCollectionData = async () => {
  const userId = route.params.userId
  const collectionName = route.params.name
  try {
    const collectionResponse = await getUserCollectionByName(userId, collectionName)
    // Bulk fetch the recipes once we get user collections
    if (collectionResponse.data.value) {
      collection.value = collectionResponse.data.value;
      const recipesResponse = await getRecipesInBulk(collectionResponse.data.value.recipes)
      recipes.value = recipesResponse.data.value
    }
  } catch (error) {
    console.log(error)
  }
}

watch(
  () => route.params.name,
  async () => {
    await fetchCollectionData()
  },
);

onMounted(async () => {
  await fetchCollectionData()
});

const onDeleteClick = async () => {
  const res = await deleteUserCollection(route.params.userId, route.params.name)
  if (res.statusCode.value === 200) {
    toast.success("Collection deleted")
    document.location.href="/";

  } else {
    toast.error("Failed to delete collection")
  }
}

</script>

<template>
  <div v-if="recipes === null" class="mt-3">
    <Loader />
  </div>
  <div v-else>
    <div class="flex">
      <div class="hero h-56" style="background-image: url(/grainy_food.png);">
        <div class="hero-overlay bg-opacity-60"></div>
        <div class="hero-content text-center text-neutral-content flex ">
          <div class="max-w-md">
            <h1 class="mb-5 text-5xl font-bold">{{ route.params.name }}</h1>
            <span class="flex justify-center">
              <p>{{ recipes.length }} Recipes</p>
              <label for="delete-modal">
                <TrashIcon @click="" class="ml-2 h5 w-5" />
              </label>
            </span>
          </div>
        </div>

      </div>
    </div>
    <div class="flex">
      <div class="mx-auto">
        <div v-if="recipes === null" class="mt-3">
          <Loader />
        </div>
        <div v-if="recipes.length === 0">
          <h1 class="mt-5">Oops! You have no recipes added</h1>
        </div>
        <div v-else>
          <RecipesGrid :recipes="recipes" />
        </div>
      </div>
    </div>
  </div>

  <!-- Put this part before </body> tag -->
  <input type="checkbox" id="delete-modal" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Are you sure you want to delete this collection?</h3>
      <p class="py-4">You cannot revert this process</p>
      <div class="modal-action">
        <label for="delete-modal" class="btn btn-primary">Cancel</label>
        <label for="delete-modal" class="btn btn-error" @click="() => onDeleteClick()">Delete</label>
      </div>
    </div>
  </div>
</template>