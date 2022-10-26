<script setup>
const props = defineProps(['recipe'])
const recipe = ref(props.recipe)

</script>

<template>
  <div class="flex justify-between">
    <div class="flex flex-col">
      <h1 class="font-bold text-2xl">{{ recipe.title }}</h1>
      <TextLink>{{ recipe.sourceName }}</TextLink>
      <RecipeStats :recipe=recipe />

    </div>

    <div>
      <div class="avatar">
        <div class="w-96 rounded">
          <img :src="recipe.image" :alt="recipe.title" />
        </div>
      </div>
    </div>
  </div>
</template>