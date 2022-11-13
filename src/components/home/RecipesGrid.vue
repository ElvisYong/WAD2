<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useInfiniteScroll, useWindowSize, useVirtualList } from '@vueuse/core';
import { useAuth0 } from "@auth0/auth0-vue";
import { getUserCollections } from '../../apis/collections'

const { user } = useAuth0();
const router = useRouter()
const { height } = useWindowSize();

const props = defineProps(["recipes"])
const emits = defineEmits(["load-more"])

const recipes = ref(props.recipes)
const userCollections = ref([])

onMounted(async () => {
  if (user.value) {
    try {
      if (user.value.sub) {
        const res = await getUserCollections(user.value.sub)
        userCollections.value.push(...res.data.value)
      }
    } catch (error) {
      console.log(error)
    }
  }
})

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
  <div class="mt-6 no-scrollbar" v-bind="containerProps" :style="{ height: height - 10 + 'px' }">
    <div class="md:mx-3">
      <slot></slot>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:gap-10">
        <div v-for="recipe in recipes" class="text-center mt-0 mb-5">
          <CardItem :title="recipe.title" :image="recipe.image" :cuisines="recipe.cuisines" :diets="recipe.diets"
            :userCollections="userCollections" :recipeId="recipe.id" @cardClick="gotoRecipeInfo(recipe)"
            @linkClick="gotoRecipeInfo(recipe)" />
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
