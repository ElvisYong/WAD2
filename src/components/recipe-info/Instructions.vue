<script setup>
const props = defineProps(['recipe'])
const recipe = props.recipe
const instructionSteps = ref([])

if (recipe.analyzedInstructions.length > 0) {
  instructionSteps.value = recipe.analyzedInstructions[0].steps
}


</script>

<template>
  <div class="container w-100 flex flex-col justify-items-center">
    <div>
      <h1 class="font-bold text-xl">Instructions:</h1>
      <div v-for="instruction in instructionSteps">
        <p class="mt1">{{ instruction.number }}: {{ instruction.step }}</p>
      </div>
    </div>
  </div>
</template>