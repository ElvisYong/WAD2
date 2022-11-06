<script setup>
import { ref, watch } from 'vue'

useHead({
    title: "My Kitchen",
});

const selectedIngredients = ref([]);


const addIngredient = (ingredient) => {
    selectedIngredients.value.push(ingredient);
    // TODO: Once new ingredients are added populate the page with badges of the ingredients
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
        </div>
    </div>
</template>