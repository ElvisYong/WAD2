<script setup>
const props = defineProps(['recipe'])

const recipe = ref(props.recipe)

</script>

<!-- TODO: Style cards -->
<template>
  <div>
    <div class="avatar">
      <div class="rounded">
        <img :src="recipe.image" alt="Shoes" />
      </div>
    </div>
    <div class="flex">
      <p class="text-sm">{{recipe.title}}</p>
    </div>
  </div>
</template>
