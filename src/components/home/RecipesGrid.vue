<script setup>
import { ref, onBeforeMount } from 'vue'
import { getRandomRecommendations } from '../../apis/recipes'

const randomRecipes = ref(null)

onMounted(async () => {
  try {
    const response = await getRandomRecommendations(false, "meat,lunch", 10)
    randomRecipes.value = response.data.value.recipes

  } catch (error) {
    console.log(error)
  }
})

</script>

<template>
  <div class="mt-6">
    <div v-if="randomRecipes === null">
      <Loader />
    </div>
    <div v-else>
      <div class="container grid xl:grid-cols-7 lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-1">
        <div></div>
        <h1 class="ml-3 font-bold text-xl">Recipes!</h1>
      </div>
      <div class="container grid xl:grid-cols-11 lg:grid-cols-9 md:grid-cols-7 sm:grid-cols-1">
        <div class=""></div>
        <div
          class="mt-3 p-3 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-50 lg:gap-40 md:gap-40">
          <div v-for="recipe in randomRecipes">
            <CardItem :recipe="recipe" />
            <div></div>
          </div>
        </div>
        <div class=""></div>
      </div>
    </div>
  </div>
</template>
