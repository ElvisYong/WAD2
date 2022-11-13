<script setup>
import { ref, computed, watch } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'
import { CheckIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { getIngredientsAutocomplete } from '../apis/ingredients'
import { useRouter } from 'vue-router'
import debounced from "lodash.debounce"

let ingredients = ref([])
let selected = ref()
let searchTerm = ref('')

const router = useRouter()

const debouncedSearch = debounced(async (searchTerm) => {
  const response = await getIngredientsAutocomplete(searchTerm)
  ingredients.value = response.data.value
}, 500)

watch(searchTerm, async (newSearchTerm, oldSearchTerm) => {
  try {
    debouncedSearch(newSearchTerm)
  } catch (error) {
    console.log(error)
  }
})

let filteredIngredients = computed(() => {
  if (searchTerm.value === '') {
    return []
  }

  return ingredients.value.filter((ingredient) => {
    return ingredient.name
      .toLowerCase()
      .replace(/\s+/g, '')
      .includes(searchTerm.value.toLowerCase().replace(/\s+/g, ''))
  })
})

</script>

<template>
  <div class="w-full">
    <Combobox v-model="selected">
      <div class="relative mt-1">
        <div
          class="flex w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
          <ComboboxButton class="inset-y-0 left-0 flex items-center pl-2" >
            <MagnifyingGlassIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </ComboboxButton>
          <ComboboxInput class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0" placeholder="Key in Your Ingredients Here"
            :displayValue="(recipe) => recipe && recipe.value" @change="searchTerm = $event.target.value" />
        </div>

        <TransitionRoot leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0"
          @after-leave="searchTerm = ''">
          <ComboboxOptions
            class="z-50 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm" placeholder="Simply key in your ingredients here">
            <div v-if="ingredients.length === 0 && searchTerm !== ''"
              class="relative cursor-default select-none py-2 px-4 text-gray-700">
              Loading...
            </div>

            <ComboboxOption v-for="ingredient in filteredIngredients" as="template" :key="ingredient.id"
              :value="ingredient" v-slot="{ selected, active }">
              <li class="relative cursor-default select-none py-2 pl-10 pr-4" :class="{
                'bg-teal-600 text-white': active,
                'text-gray-900': !active,
              }">
                <span @click="$emit('selectedIngredient', ingredient.name)" class="block truncate" :class="{ 'font-medium': selected, 'font-normal': !selected }">
                  {{ ingredient.name }}
                </span>
                <span v-if="selected" class="absolute inset-y-0 left-0 flex items-center pl-3"
                  :class="{ 'text-white': active, 'text-teal-600': !active }">
                  <CheckIcon class="h-5 w-5" aria-hidden="true" />
                </span>
              </li>
            </ComboboxOption>
          </ComboboxOptions>
        </TransitionRoot>
      </div>
    </Combobox>
  </div>
</template>
