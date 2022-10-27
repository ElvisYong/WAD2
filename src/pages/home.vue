<script setup>
useHead({
  title: "Home",
});
</script>

<route lang="json">
{
  "meta": {
    "title": "Home"
  }
}
</route>

<template>
  <div class="mx-auto">
    <div class="hidden mx-auto w-1/2 mt-6 lg:flex">
      <SearchBar />
    </div>

    <!-- <div class="mt-10">
      <PreferenceForm />
    </div> -->

    <div>
      <RecipesGrid />
    </div>
  </div>
</template>
