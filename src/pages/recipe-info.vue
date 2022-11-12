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