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
    const response = await getRecipeById(recipeId, false);
    console.log(response.data)
    recipe.value = response.data;

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
    <!-- Summary Wrapper -->
    <div class="flex flex-row">

      <div>
        <h1>{{ recipe }}</h1>
      </div>

    </div>
  </div>
</template>
