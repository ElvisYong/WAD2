<script setup lang="ts">
</script>

<!-- TODO: Finish gallery view -->
<template>
  <div class="mt-5">
    <p1>Some content</p1>
    <div class="grid grid-cols-4 gap-4">
      <div v-for="n in 10">
        <CardItem />
      </div>
    </div>
  </div>
</template>
