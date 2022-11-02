<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getUserCollectionByName } from "../apis/collections"
import { getRecipesInBulk } from "../apis/recipes"

const route = useRoute();
const collection = ref(null)
const recipes = ref(null)

onMounted(async () => {
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
});

</script>

<template>
  <div class="mx-auto">
    <div v-if="recipes === null" class="mt-3">
      <Loader />
    </div>
    <div v-else>
      <div v-if="recipes.length === 0">
        <h1 class="mt-5">Oh no you have no recipes added</h1>
      </div>
      <div v-else>
        <RecipesGrid :recipes="recipes" />
      </div>
    </div>
  </div>
</template>