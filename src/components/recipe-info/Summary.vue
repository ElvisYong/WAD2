<script setup>
const props = defineProps(['recipe'])
const recipe = ref(props.recipe)
const rating = ref(0)

// Calculate the rating from spoonacular
if (recipe.spoonacularScore) {
  rating.value = Math.round((recipe.spoonacularScore / 100) * 10)
}

</script>

<template>
  <div class="flex flex-col lg:gap-16 xl:gap-28 lg:flex-row">
    <div class="flex flex-col order-last  lg:order-first">
      <div>
        <!-- Recipe title -->
        <h1 class="font-bold text-2xl">{{ recipe.title }}</h1>

        <!-- Recipe Source -->
        <div>
          <TextLink>{{ recipe.sourceName }}</TextLink>
        </div>

        <!-- Ratings -->
        <div class="rating mt-3">
          <div v-for="i in rating">
            <input name="rating-2" class="mask mask-star-2 bg-orange-400" />
          </div>
          <div v-for="i in 5 - rating">
            <input name="rating-2" class="mask mask-star-2 bg-gray-400" />
          </div>
        </div>

        <!-- Badges -->
        <div class="flex flex-row my-4 gap-2">
          <div v-for="dishType in recipe.dishTypes">
            <div class="badge badge-primary">{{ dishType }}</div>
          </div>
        </div>
      </div>

      <!-- Health Score -->
      <div class="flex flex-col my-4">
        <div class="radial-progress text-primary" :style="{ '--value': recipe.healthScore }" style="--thickness: 3px;">
          {{ recipe.healthScore }}/100
        </div>
        <h1 class="font-medium">Health Score</h1>
      </div>

      <!-- Recipe stats -->
      <div class="mt-auto">
        <RecipeStats :recipe=recipe />
      </div>
    </div>

    <div class="mx-auto md:mr-auto">
      <div class="avatar mr-0">
        <div class="w-96 rounded">
          <img :src="recipe.image" :alt="recipe.title" />
        </div>
      </div>
    </div>

  </div>
</template>