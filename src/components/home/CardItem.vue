<script setup>
import { defineProps, ref } from 'vue';

const props = defineProps(['title', 'image', 'tags', 'diets', 'cuisines'])
const title = ref(props.title)
const image = ref(props.image)
const diets = ref(props.diets)
const cuisines = ref(props.cuisines)

onMounted(() => {
  if (image.value === undefined) {
    image.value = './otherfood_x.jpg'
  }
})

</script>

<template>
  <div>
    <div class="avatar cursor-pointer">
      <div class="w-80 md:w-60 lg:w-40 rounded-lg relative">
        <div class="absolute inset-0 bg-cover bg-center z-0">
          <img class="rounded" :src="image" @error="replaceImageDefault" />
        </div>
        <div
          class="opacity-0 hover:opacity-60 absolute inset-0 flex justify-center text-sm text-white py-2 bg-black items-center">
          <div v-if="cuisines && cuisines.length > 0">
            {{ cuisines[0] }}
          </div>
          <div v-else-if="diets && diets.length > 0">
            {{ diets[0] }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-center text-xl md:text-lg lg:text-md">
      <TextLink>{{ title }}</TextLink>
    </div>
  </div>
</template>
