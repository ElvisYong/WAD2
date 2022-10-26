<script setup>
import ClockIcon from '@heroicons/vue/24/outline/ClockIcon'
const props = defineProps(['recipe'])
const recipe = ref(props.recipe)
</script>

<template>
  <div class="stats stats-vertical lg:stats-horizontal shadow">
    <div class="stat">
      <div class="stat-title">Ingredients</div>
      <div class="stat-value">{{ recipe.extendedIngredients.length }}</div>
      <!-- <div class="stat-desc"></div> -->
    </div>

    <div class="stat">
      <div class="stat-title">Ready In</div>
      <div class="stat-value">{{ recipe.readyInMinutes }}</div>
      <div class="stat-desc">Minutes</div>
    </div>

    <div class="stat">
      <div class="stat-title">Calories</div>
      <div v-if="recipe.nutrition.nutrients.length > 0">
        <div class="stat-value">
          {{ recipe.nutrition.nutrients[0].amount }}
        </div>
        <div class="stat-desc">{{ recipe.nutrition.nutrients[0].unit }}</div>
      </div>
      <div v-else class="stat-value">?</div>
      <!-- <div class="stat-desc"></div> -->
    </div>

  </div>
</template>