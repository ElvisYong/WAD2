<script setup>
import { StarIcon } from '@heroicons/vue/20/solid';

const props = defineProps(['recipe'])
const recipe = ref(props.recipe)

</script>

<template>
  <div class="flex flex-col lg:gap-16 xl:gap-28 lg:flex-row">
    <div class="flex flex-col order-last lg:order-first my-auto">
      <div>
        <!-- Recipe title -->
        <h1 class="font-bold text-2xl">{{ recipe.title }}</h1>

        <!-- Recipe Source -->
        <div>
          <a :href="recipe.sourceUrl">
            <TextLink>{{ recipe.sourceName }}</TextLink>
          </a>
        </div>

        <!-- Badges -->
        <div class="flex flex-row mt-3 gap-2">
          <div v-for="dishType in recipe.dishTypes">
            <div class="badge badge-secondary">{{ dishType }}</div>
          </div>
        </div>
      </div>

      <!-- Recipe stats -->
      <div class="mt-3">
        <RecipeStats :recipe=recipe />
      </div>
    </div>

    <div class="mx-auto md:mr-auto">
      <div class="indicator">
        <div class="indicator-item indicator-top">
          <button class="btn btn-primary btn-circle">
            <StarIcon class="h-5 w-5" />
          </button>
        </div>
        <div class="avatar mr-0">
          <div class="w-96 rounded">
            <img :src="recipe.image" :alt="recipe.title" />
          </div>

        </div>
      </div>
    </div>

  </div>
</template>