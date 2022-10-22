<script setup lang="ts">
</script>

<!-- TODO: Finish gallery view -->
<template>
  <div class="mt-5">
    <p1>Some content</p1>
    <div class="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <div v-for="n in 10">
        <CardItem />
      </div>
    </div>
  </div>
</template>
