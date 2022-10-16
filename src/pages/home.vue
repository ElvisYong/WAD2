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
  <div class="lg:mx-60">
    <div class="mx-auto w-1/2 mt-6">
      <SearchBar />
    </div>

    <div class="mt-10">
      <PreferenceForm />
    </div>

    <div>
      <RecipesGrid />
    </div>
  </div>
</template>
