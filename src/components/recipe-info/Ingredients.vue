<script setup>
const props = defineProps(['recipe'])
const recipe = props.recipe

</script>

<template>
  <div class="container w-100 flex flex-col justify-items-center">
    <div class="flex">
      <h1 class="font-bold text-xl">Ingredients:</h1>
      <p class="ml-auto">{{recipe.servings}} servings</p>
    </div>

    <div v-for="ingredients in recipe.extendedIngredients">
      <p class="mt-1 p-1">
        {{ ingredients.amount }} {{ ingredients.unit }} <span class="font-bold">{{ ingredients.name }}</span></p>
    </div>
    <div class="col-2"></div>
  </div>
</template>