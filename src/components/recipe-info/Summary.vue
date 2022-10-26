<script setup>
const props = defineProps(['recipe'])
const recipe = ref(props.recipe)
const rating = ref(0)

// Calculate the rating from spoonacular
if (recipe.spoonacularScore) {
  rating.value = Math.round((recipe.spoonacularScore / 100) * 10)
}

</script>

<template>
  <div class="flex flex-col md:flex-row">
    <div class="flex flex-col order-last md:order-first">
      <!-- Recipe title -->
      <h1 class="font-bold text-2xl">{{ recipe.title }}</h1>

      <!-- Recipe Source -->
      <div>
        <TextLink>{{ recipe.sourceName }}</TextLink>
      </div>

      <!-- Ratings -->
      <div class="rating mt-2">
        <div v-for="i in rating">
          <input name="rating-2" class="mask mask-star-2 bg-orange-400" />
        </div>
        <div v-for="i in 5 - rating">
          <input name="rating-2" class="mask mask-star-2 bg-gray-400" />
        </div>
      </div>

      <!-- Recipe Summary -->
      <div class="">
        <p v-html="recipe.summary"></p>
      </div>

      <!-- Recipe stats -->
      <div class="mt-auto">
        <RecipeStats :recipe=recipe />
      </div>
    </div>

    <div class="md:ml-auto">
      <div class="avatar">
        <div class="w-96 rounded">
          <img :src="recipe.image" :alt="recipe.title" />
        </div>
      </div>
    </div>

  </div>
</template>