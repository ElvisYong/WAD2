<script setup>
const props = defineProps(['recipe'])
console.log(props.recipe)
const recipe = ref(props.recipe)

</script>

<template>
  <div class="flex justify-between">
    <div>
      <h1 class="font-bold text-2xl">{{ recipe.title }}</h1>
      <TextLink>{{recipe.sourceName}}</TextLink>
    </div>

    <div>
      <div class="avatar">
        <div class="w-96 rounded">
          <img :src="recipe.image" />
        </div>
      </div>
    </div>
  </div>
</template>