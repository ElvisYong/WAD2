<script setup>
import { ref, watch } from 'vue'

useHead({
    title: "My Kitchen",
});

const selectedIngredients = ref([{
    name: "water"
}, {
    name: "salt"
},
{
    name: "olive oil"
}])


const addIngredient = (ingredient) => {
    selectedIngredients.value.push(ingredient);
    console.log(selectedIngredients.value)
}

const removeIngredient = (index) => {
    selectedIngredients.value.splice(index, 1);
}

</script>

<template>
    <div class="sm:mx-16 lg:mx-16 xl:mx-60">
        <div class="mt-10">
            <h1 class="text-2xl">Ready made recipes with the ingredients you have!</h1>
            <!-- TODO: Change the text here -->
            <p class="mt-6 text-sm">
                It's no secret that grocery shopping can be a drag. But if you have a few ingredients on hand, we have
                some great ways to make them into dinner.

                Just enter your ingredients below and we'll show you how to prepare a meal with what you have. For
                best results, enter 10 or more ingredients below, such as staples like salt, pepper, onion and garlic.
            </p>

            <div class="mt-6">
                <IngredientsSearchBar @selectedIngredient="addIngredient" />
            </div>

            <div v-if="selectedIngredients.length > 0">
                <div class="mt-6">
                    <h1 class="text-2xl">Selected Ingredients</h1>
                    <div class="flex mt-6 gap-1">
                        <div v-for="(ingredient, index) in selectedIngredients">
                            <div class="badge badge-secondary">
                                <svg @click="removeIngredient(index)" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    class="inline-block w-4 h-4 stroke-current hover:cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                                {{ ingredient.name }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-6">
                <button class="btn btn-primary">Search Ready Recipes</button>
            </div>
        </div>
    </div>
</template>