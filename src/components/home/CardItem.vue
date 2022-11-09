<script setup>
import { useRouter } from 'vue-router'
import { defineProps, ref } from 'vue';

const props = defineProps(['title', 'image', 'tags'])
const title = ref(props.title)
const image = ref(props.image)
const tags = ref(props.tags)

</script>

<template>
  <div>
    <div class="avatar cursor-pointer">
      <div class="w-80 md:w-60 lg:w-40 rounded-lg relative">
        <div class="absolute inset-0 bg-cover bg-center z-0">
          <img class="rounded" :src="image" alt="recipeimage" />
        </div>
        <div
          class="opacity-0 hover:opacity-60 absolute inset-0 flex justify-center text-sm text-white py-2 bg-black items-center">
          <!-- {{ recipe.extendedIngredients[0].name }} -->
          test
        </div>
      </div>
    </div>

    <div class="flex justify-center text-xl md:text-lg lg:text-md">
      <TextLink>{{ title }}</TextLink>
    </div>
  </div>
</template>
