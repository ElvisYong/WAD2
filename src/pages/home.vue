<script setup>
import { getRandomRecommendations } from '../apis/recipes'
import { useInfiniteScroll } from '@vueuse/core'
import { useAuth0 } from "@auth0/auth0-vue";

useHead({
  title: "Home",
});

const el = ref(null);
const randomRecipes = ref(null);
const { loginWithPopup, logout, user, isAuthenticated, } = useAuth0();

const fetchGetRandomRecommendations = async (number) => {
  try {
    const response = await getRandomRecommendations(false, "meat,lunch", number)
    randomRecipes.value = response.data.value.recipes
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  await fetchGetRandomRecommendations(10)
})

useInfiniteScroll(el, async () => {
  const response = await fetchGetRandomRecommendations(10);
  // randomRecipes without dups from response
  const dataWithPotentialDups = [...randomRecipes.value, ...response.data.value.recipes]
  const dataWithoutDups = [...new Set(dataWithPotentialDups)]

  randomRecipes.value = dataWithoutDups;
}, { distance: 10 })


</script>

<route lang="json">
{
  "meta": {
    "title": "Home"
  }
}
</route>

<template class="scroll-behaviour-[smooth]"> <!--idk why the scroll not working >:()-->
  <div class="mx-auto">
    <div class="hero min-h-screen bg-light">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 v-if="!isAuthenticated" class="text-5xl font-bold ">Hello!</h1>
          <h1 v-else class="text-5xl font-bold bg-[]">Welcome Back!</h1>
          <p class="py-6">What would you like to explore today?</p>
          <!-- <button class="btn btn-primary mr-2 lg:text-center"><a href="#recipes">Browse Recipes</a></button>
          <button class="btn btn-primary ml-2 hidden lg:inline-block"><a href="#search">Search Recipes</a></button> -->
          <a href="#search" class="text-[#d58d00] no-underline hover:underline">Search Recipes</a><span class="text-[#d58d00] mr-3"> ></span>
          <a href="#recipes" class="text-[#d58d00] ml-3 no-underline hover:underline">Browse Recipes</a><span class="text-[#d58d00]"> ></span>
        </div>
      </div>
    </div>
  </div>

    <div class="hero min-h-screen bg-[url('grainy_food.png')]" id="search" >
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 v-if="!isAuthenticated" class="text-5xl font-bold">Hello!</h1>
          <h1 v-else class="text-5xl font-bold text-white">Recipe Search</h1>
          <p class="py-6 text-white">What's cooking?</p>
          <div class="hidden mx-auto lg:flex">
            <GeneralSearchBar/>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto">
    <!-- <div class="hidden mx-auto mt-6 lg:flex">
      <GeneralSearchBar id="search"/>
    </div> -->
    <div id="recipes">
    <div v-if="randomRecipes === null" class="mt-3">
      <Loader />
    </div>
    <div ref="el" v-else>
      <RecipesGrid :recipes="randomRecipes" />
    </div>
  </div>
  </div>
</template>
