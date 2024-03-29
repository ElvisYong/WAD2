<script setup>
import { getRandomRecommendations } from '../apis/recipes'
import { watch } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";

useHead({
  title: "Home",
});

const randomRecipes = ref(null);
const { user, isAuthenticated, } = useAuth0();
const greetings = ref("Hello!")
const isLoadingMore = ref(false)

const fetchGetRandomRecommendations = async (number) => {
  try {
    const response = await getRandomRecommendations(false, "meat,lunch", number)
    if (response.isFinished) {
      isLoadingMore.value = false
      return response.data.value.recipes
    }
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  if (isAuthenticated && user.value) {
    greetings.value = `Welcome Back ${user.value.name}!`
  }
  randomRecipes.value = await fetchGetRandomRecommendations(30)
})

watch(user, async () => {
  if (user.value) {
    greetings.value = `Welcome Back ${user.value.name}!`
  }
})

const loadMoreData = async () => {
  const recipes = await fetchGetRandomRecommendations(10);
  const filteredData = recipes.filter(recipe => !randomRecipes.value.includes(recipe))
  randomRecipes.value.push(...filteredData)
}

</script>

<route lang="json">
{
  "meta": {
    "title": "Home"
  }
}
</route>

<template class="scroll-behaviour-[smooth]">
  <div class="mx-auto">
    <div class="hero min-h-screen bg-light">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold ">{{ greetings }}</h1>
          <p class="py-6">What would you like to explore today?</p>
          <div class="hidden lg:inline-block">
            <a href="#search" class="text-[#d58d00] no-underline hover:underline">Search Recipes</a><span
              class="text-[#d58d00] mr-3"> ></span>
          </div>
          <a href="#recipes" class="text-[#d58d00] ml-3 no-underline hover:underline">Browse Recipes</a><span
            class="text-[#d58d00]"> ></span>
        </div>
      </div>
    </div>
  </div>

  <div class="hidden lg:block" v-motion-fade-visible>
    <div class="hero min-h-screen bg-[url('/otherfood.png')]" id="search">
      <div class="hero-content text-center content-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold text-white">Recipe Search</h1>
          <p class="py-6 text-white">What's cooking?</p>
          <div class="hidden mx-auto lg:flex sticky top-0">
            <GeneralSearchBar />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="hero min-h-screen bg-light">
    <div class="hero-content text-center">
      <div class="mx-auto">
        <div id="recipes">
          <div v-if="randomRecipes === null" class="mt-3">
            <Loader />
          </div>
          <div v-else>
            <h1 class="mb-6 font-bold text-2xl text-center lg:text-center">Recipes</h1>
            <RecipesGrid :loadMoreChevron="true" @loadMore="loadMoreData" :recipes="randomRecipes"/>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>
