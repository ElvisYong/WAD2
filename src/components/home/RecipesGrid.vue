<script setup>
import { ref } from 'vue'

const props = defineProps(["recipes"])
const randomRecipes = ref(props.recipes)

</script>

<!-- <template>
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
</template> -->

<template>
  <div class="mt-6">
    <div class="md:mx-3">
      <h1 class="mb-3 font-bold text-xl text-center lg:text-left">Recipes!</h1>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:gap-10">
        <div v-for="recipe in randomRecipes" class="text-center mt-0 mb-5">
          <CardItem :recipe="recipe" />
        </div>
      </div>
    </div>
  </div>
</template>
