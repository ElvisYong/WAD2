<script setup>
import { getRandomRecommendations } from '../apis/recipes'
import { useInfiniteScroll } from '@vueuse/core'

useHead({
  title: "Home",
});

const el = ref(null);
const randomRecipes = ref(null);

const fetchGetRandomRecommendations = async (number) => {
  try {
    const response = await getRandomRecommendations(false, "meat,lunch", number)
    randomRecipes.value = response.data.value.recipes
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  await fetchGetRandomRecommendations(10)
})

useInfiniteScroll(el, async () => {
  const response = await fetchGetRandomRecommendations(10);
  // randomRecipes without dups from response
  const dataWithPotentialDups = [...randomRecipes.value, ...response.data.value.recipes]
  const dataWithoutDups = [...new Set(dataWithPotentialDups)]

  randomRecipes.value = dataWithoutDups;
}, { distance: 10 })


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
      <RecipesGrid :recipes="randomRecipes" />
    </div>
  </div>
</template>
