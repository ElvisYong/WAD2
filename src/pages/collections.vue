<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getUserCollectionByName } from "../apis/collections"

const route = useRoute();
const collection = ref(null)

onMounted(async () => {
  const userId = route.params.userId
  const collectionName = route.params.name
  try {
    const res = await getUserCollectionByName(userId, collectionName)
    // Time to fetch the recipes
    if (res.data.value) {
      collection.value = res.data.value;
      res.data.value
    }
  } catch (error) {
    console.log(error)
  }
});

</script>

<template>
  <div class="mx-auto">
    <div>
      <RecipesGrid />
    </div>
  </div>
</template>