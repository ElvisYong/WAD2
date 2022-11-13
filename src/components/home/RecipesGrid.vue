<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useAuth0 } from "@auth0/auth0-vue";
import { getUserCollections } from '../../apis/collections'
import { ChevronDownIcon } from '@heroicons/vue/20/solid';

const { user } = useAuth0();
const router = useRouter()

const props = defineProps(["recipes", "loadMoreChevron"])
const emits = defineEmits(["loadMore"])

const loadMoreChevron = ref(props.loadMoreChevron)
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

const gotoRecipeInfo = (recipe) => {
  router.push({
    path: '/recipe-info/:id',
    name: 'RecipeInfo',
    params: { id: recipe.id },
  })
}

</script>

<template>
  <div class="mt-6 no-scrollbar ">
    <div class="md:mx-3">
      <slot></slot>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 md:gap-10">
        <div v-for="recipe in recipes" class="text-center mt-0 mb-5">
          <CardItem :title="recipe.title" :image="recipe.image" :cuisines="recipe.cuisines" :diets="recipe.diets"
            :userCollections="userCollections" :recipeId="recipe.id" @cardClick="gotoRecipeInfo(recipe)"
            @linkClick="gotoRecipeInfo(recipe)" />
        </div>
      </div>

      <div v-if="loadMoreChevron" class="mx-auto">
        <ChevronDownIcon @click="$emit('loadMore')" class="h-10 hover:cursor-pointer w-10 mx-auto animate-bounce" />
      </div>
    </div>
  </div>

</template>