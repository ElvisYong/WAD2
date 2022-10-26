<script setup>
import { useRouter } from 'vue-router'
import { defineProps, ref } from 'vue';

const router = useRouter()
const props = defineProps(['recipe'])
const recipe = ref(props.recipe)

const gotoRecipeInfo = (recipe) => {
  router.push(
    {
      path: '/recipe-info/:id',
      name: 'RecipeInfo',
      params: { id: recipe.id },
    })
}

</script>

<!-- TODO: Style cards -->
<template>
  <div @click="gotoRecipeInfo(recipe)">
    <div class="avatar cursor-pointer">
      <div class="w-40 h-40 relative">
        <!--unfortunately if i dont define a height and width the images doesnt work:(-->
        <div class="absolute inset-0 bg-cover bg-center z-0">
          <img class="rounded" :src="recipe.image" alt="recipeimage" />
        </div>
        <div
          class="opacity-0 hover:opacity-60 absolute inset-0 flex justify-center text-sm text-white py-2 bg-black items-center">
          {{ recipe.extendedIngredients[0].name }}
        </div>
      </div>
    </div>

    <div class="flex">
      <TextLink>{{ recipe.title }}</TextLink>
    </div>
  </div>
</template>
