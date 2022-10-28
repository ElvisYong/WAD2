<script setup>
import { getRecipeById } from '../apis/recipes';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'

useHead({
    title: "Recipe info",
});

const route = useRoute();
const recipe = ref(null)

onMounted(async () => {
    const recipeId = route.params.id
    try {
        const response = await getRecipeById(recipeId, true);
        recipe.value = response.data.value;
    } catch (error) {
        console.log(error);
    }
})

</script>

<route lang="json">
{
    "meta": {
        "title": "RecipeInfo"
    }
}
</route>

<!-- ORIGINAL
    <template>
    <div class="mx-auto">
        <div v-if="recipe === null" class="mt-10">
            <Loader />
        </div>

        <div v-else class="lg:mt-24 mb-10">
            // Summary Wrapper
            <Summary :recipe="recipe" />

            // Instructions 
            <div class="mt-16">
                <Instructions :recipe="recipe" />
            </div>
        </div>
    </div>
</template> -->

<template>
    <div>
        <div v-if="recipe === null" class="mt-10">
            <Loader />
        </div>

        <div v-else class="lg:mt-24 mb-10">
            <!-- Summary Wrapper -->
            <div class="container grid grid-cols-12">
                <div class=""></div>
                <div>
                    <Summary :recipe="recipe" />
                </div>
                <div class=""></div>
            </div>
            <!-- Instructions -->
            <div class="container grid grid-cols-7 mt-10">
                <div class=""></div>
                <div class="col-span-5">
                    <Instructions :recipe="recipe" />
                </div>
                <div class=""></div>
            </div>
        </div>
    </div>
</template>
