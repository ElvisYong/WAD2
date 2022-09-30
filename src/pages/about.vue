<route lang="json">
{
  "meta": {
    "title": "About"
  }
}
</route>

<script setup>
useHead({
  title: 'About',
})
</script>

<template>
  <div>
    <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2 class="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
        About Page
      </h2>
      <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div class="inline-flex rounded-md shadow">
          <router-link to="/"
            class="inline-flex items-center btn-primary justify-center rounded-md border border-transparent px-5 py-3 text-base font-medium leading-6 transition text-white duration-150 ease-in-out focus:outline-none">
            Back Home</router-link>
        </div>
        <ButtonRepo />
      </div>
    </div>
  </div>
</template>
