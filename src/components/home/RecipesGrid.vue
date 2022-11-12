<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useInfiniteScroll, useWindowSize, useVirtualList } from '@vueuse/core';

const router = useRouter()
const props = defineProps(["recipes"])
const emits = defineEmits(["load-more"])
const recipes = ref(props.recipes)

const el = ref(null);
const { height } = useWindowSize();

const { containerProps } = useVirtualList(recipes, {
  itemHeight: 80,
  overscan: 5,
});

const gotoRecipeInfo = (recipe) => {
  router.push({
    path: '/recipe-info/:id',
    name: 'RecipeInfo',
    params: { id: recipe.id },
  })
}

useInfiniteScroll(containerProps.ref, () => {
  emits("load-more")
}, { distance: 10 }
);

</script>

<template>
  <div class="mt-6 no-scrollbar" ref="el" v-bind="containerProps" :style="{ height: height - 200 + 'px' }">
    <div class="md:mx-3">
      <!-- <h1 class="mb-6 font-bold text-2xl text-center lg:text-center">Recipes</h1> -->
      <slot></slot>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:gap-10">
        <div v-for="recipe in recipes" class="text-center mt-0 mb-5">
          <CardItem @click="gotoRecipeInfo(recipe)" :title="recipe.title" :image="recipe.image"
            :cuisines="recipe.cuisines" :diets="recipe.diets" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
