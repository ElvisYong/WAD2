<script setup>
import { ref, watch } from 'vue'
import { getRecipesByIngredients } from "../apis/recipes";

useHead({
  title: "My Kitchen",
});

const selectedIngredients = ref(["water", "salt", "olive oil"]);
const recipes = ref([])

const addIngredient = (ingredientName) => {
  selectedIngredients.value.push(ingredientName);
  console.log(selectedIngredients.value)
}

const removeIngredient = (index) => {
  selectedIngredients.value.splice(index, 1);
}

const findRecipesByIngredients = async () => {
  const res = await getRecipesByIngredients(selectedIngredients.value, 50);
  recipes.value = res.data.value
}

</script>

<template>
  <div class="hero min-h-screen bg-[url('/frame1darkblur.png')]">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold text-white">Limited Ingredients? Unlimited Recipes.</h1>
        <p class="py-3 text-xl text-white">Ready made recipes with the ingredients you have!</p>
        <div>
          <IngredientsSearchBar @selectedIngredient="addIngredient" />
        </div>
        <div v-if="selectedIngredients && selectedIngredients.length > 0">
          <div class="mt-6">
            <h1 class="text-lg text-left text-[#FDED54]">Selected Ingredients</h1>
            <div class="flex gap-1">
              <div v-for="(ingredientName, index) in selectedIngredients">
                <div class="badge badge-secondary">
                  <svg @click="removeIngredient(index)" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current hover:cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                    </path>
                  </svg>
                  {{ ingredientName }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <a href="#SRecipes" @click="findRecipesByIngredients"
            class="text-[#FDED54] font-bold no-underline hover:underline">Click for the magic to
            happen</a><span class="text-[#FDED54] font-bold mr-3"> ></span>
        </div>

      </div>
    </div>
  </div>


  <div class="hero min-h-screen bg-light">
    <div class="hero-content text-center">
      <div class="mx-auto" id="SRecipes">
        <div v-if="recipes && recipes.length > 0" class="mt-6">
          <RecipesGrid :recipes="recipes">
            <h1 class="mb-6 font-bold text-2xl text-center lg:text-center">Recipes</h1>
          </RecipesGrid>
        </div>
      </div>
    </div>
  </div>

</template>