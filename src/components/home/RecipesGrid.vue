<script setup>
import { ref, onBeforeMount } from 'vue'
import { getRandomRecommendations } from '../../apis/recipes'

// TODO: Remove the hardcoded data
const randomRecipes = ref([])

onMounted(async () => {
  try {
    const response = await getRandomRecommendations(false, "meat,lunch", 10)
    randomRecipes.value = response.data.value.recipes
    console.log(randomRecipes.value)

  } catch (error) {
    console.log(error)
  }
})


</script>

<!-- TODO: Finish gallery view -->
<template>
  <div class="mt-6">
    <div v-if="!randomRecipes">
      <Loader />
    </div>
    <div v-else>
      <h1 class="ml-3 font-bold text-xl">Recipes!</h1>
      <div class="mt-3 p-3 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <div v-for="recipe in randomRecipes">
          <CardItem :recipe="recipe" />
        </div>
      </div>
    </div>
  </div>
</template>
