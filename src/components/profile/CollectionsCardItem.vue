<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps(['collection'])
const collection = ref(props.collection)

</script>

<template>
  <div>
    <div class="avatar cursor-pointer">
      <div class="w-80 md:w-60 lg:w-40 rounded-lg relative">
        <div class="absolute inset-0 bg-cover bg-center z-0">
          <img class="rounded" src="/grainy_food.png" alt="recipeimage" />
        </div>
      </div>
    </div>

    <div class="flex justify-center text-xl md:text-lg lg:text-md">
      <TextLink>{{ collection.collectionName }}</TextLink>
    </div>
  </div>
</template>
