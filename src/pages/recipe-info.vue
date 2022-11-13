<script setup>
import { getRecipeById } from '../apis/recipes';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'

useHead({
  title: "Recipe info",
});

const route = useRoute();
const recipe = ref(null)

onMounted(async () => {
  const recipeId = route.params.id
  try {
    const response = await getRecipeById(recipeId, true);
    recipe.value = response.data.value;
  } catch (error) {
    console.log(error);
  }
})

</script>

<route lang="json">
{
  "meta": {
    "title": "RecipeInfo"
  }
}
</route>

<template>
  <a href="/">
    <div class="ml-8 mt-8">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
      </svg>
    </div>
  </a>
  <div class="mx-auto max-w-4xl">
    <div v-if="recipe === null" class="mt-10">
      <Loader />
    </div>

    <div v-else class="lg:mt-14 mb-10">
      <Summary :recipe="recipe" />

      <div class="mt-10 divider"></div>

      <!-- TODO: Add ingredients -->
      <div class="mt-12">
        <Ingredients :recipe="recipe" />
      </div>

      <div class="mt-10">
        <Instructions :recipe="recipe" />
      </div>
    </div>
  </div>
</template> 