<script setup>
import { useRouter, useRoute } from 'vue-router'
import { defineProps, ref } from 'vue';

const router = useRouter()
const props = defineProps(['recipe'])
const recipe = ref(props.recipe)

const gotoRecipeInfo = (recipe) => {
  router.push(
    {
      path: '/recipe-info/:id', name: 'RecipeInfo',
      params: { id: recipe.id },
      props: { recipe: recipe }
    })
}

</script>

<!-- TODO: Style cards -->
<template>
  <div @click="gotoRecipeInfo(recipe)">
    <div class="avatar cursor-pointer">
      <div class="rounded">
        <img :src="recipe.image" alt="Shoes" />
      </div>
    </div>

    <div class="flex">
      <p class="cursor-pointer text-gray-600 hover:text-yellow-500">{{ recipe.title }}</p>
    </div>
  </div>
</template>
