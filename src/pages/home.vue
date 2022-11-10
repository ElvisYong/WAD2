<script setup>
import { getRandomRecommendations } from '../apis/recipes'
import { useInfiniteScroll } from '@vueuse/core'

useHead({
  title: "Home",
});

const randomRecipes = ref(null);

const fetchGetRandomRecommendations = async (number) => {
  try {
    const response = await getRandomRecommendations(false, "meat,lunch", number)
    return response.data.value.recipes
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  randomRecipes.value = await fetchGetRandomRecommendations(10)
})

const loadMoreData = async () => {
  const recipes = await fetchGetRandomRecommendations(10);
  const filteredData = recipes.filter(recipe => !randomRecipes.value.includes(recipe))
  randomRecipes.value.push(...filteredData)
}


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
    <div ref="el" v-else>
      <RecipesGrid @load-more="loadMoreData" :recipes="randomRecipes" />
    </div>
  </div>
</template>
