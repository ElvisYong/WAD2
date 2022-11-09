<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const props = defineProps(["recipes"])
const randomRecipes = ref(props.recipes)

const gotoRecipeInfo = (recipe) => {
  router.push(
    {
      path: '/recipe-info/:id',
      name: 'RecipeInfo',
      params: { id: recipe.id },
    })
}

</script>

<template>
  <div class="mt-6">
    <div class="md:mx-3">
      <h1 class="mb-3 font-bold text-xl text-center lg:text-left">Recipes!</h1>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:gap-10">
        <div v-for="recipe in randomRecipes" class="text-center mt-0 mb-5">
          <CardItem @click="gotoRecipeInfo(recipe)" :title="recipe.title" :image="recipe.image" />
        </div>
      </div>
    </div>
  </div>
</template>
