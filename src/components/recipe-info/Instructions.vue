<script setup>
const props = defineProps(['recipe'])
const recipe = props.recipe
const instructionSteps = ref([])

if(recipe.analyzedInstructions.length > 0){
  instructionSteps.value = recipe.analyzedInstructions[0].steps
}


</script>

<template>
  <div class="container">
    <h1>Instructions:</h1>
    <div v-for="instruction in instructionSteps">
      <p>{{instruction.number}}: {{instruction.step}}</p>
    </div>
  </div>
</template>