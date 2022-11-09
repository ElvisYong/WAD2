<script setup>
import { getRandomRecommendations } from '../apis/recipes'

useHead({
  title: "Home",
});

const randomRecipes = ref(null);

onMounted(async () => {
  try {
    const response = await getRandomRecommendations(false, "meat,lunch", 10)
    randomRecipes.value = response.data.value.recipes
  } catch (error) {
    console.log(error)
  }
})

</script>

<route lang="json">
{
  "meta": {
    "title": "Home"
  }
}
</route>

<template>
  <div class="mx-auto">
    <div class="hidden mx-auto mt-6 lg:flex">
      <GeneralSearchBar />
    </div>

    <div v-if="randomRecipes === null" class="mt-3">
      <Loader />
    </div>
    <div v-else>
      <RecipesGrid :recipes="randomRecipes" />
    </div>
  </div>
</template>
