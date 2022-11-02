<script setup>
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
      <div class="avatar mr-0">
        <div class="w-96 rounded">
          <img :src="recipe.image" :alt="recipe.title" />
        </div>
      </div>
    </div>

    <input type="checkbox" id="summary-modal" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
      <div class="modal-box">
        <h3 class="font-bold text-lg">Summary</h3>
        <p class="py-4">
        <div v-html="recipe.summary"></div>
        </p>
        <div class="modal-action">
          <label for="summary-modal" class="btn">Yay!</label>
        </div>
      </div>
    </div>
  </div>
</template>