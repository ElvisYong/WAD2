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
    // TODO: remove console.log whenever
    console.log(response.data.value)
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
  <div class="sm:mx-16 lg:mx-16 xl:mx-60">
    <div v-if="recipe === null" class="mt-10">
      <Loader />
    </div>
    <!-- Summary Wrapper -->
    <div v-else class="mt-32">
      <Summary :recipe="recipe" />
    </div>
  </div>
</template>
