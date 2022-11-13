<script setup>
import { defineProps, ref } from 'vue';
import { TrashIcon } from '@heroicons/vue/20/solid'
const props = defineProps(['collection'])
const emits = defineEmits(["linkClick", "cardClick", "onDeleteClick"])
const collection = ref(props.collection)
const modalId = ref(props.collection._id)

</script>

<template>
  <div>
    <div @click="$emit('cardClick')" class="avatar cursor-pointer">
      <div class="w-80 md:w-60 lg:w-56 rounded-lg relative">
        <div class="absolute inset-0 bg-cover bg-center z-0">
          <img class="rounded" src="/grainy_food.png" alt="recipeimage" />
        </div>
      </div>
    </div>

    <div class="flex mb-2 text-xl md:text-lg lg:text-md">
      <TextLink @click="$emit('linkClick')" class="text-center md:text-left">{{ collection.collectionName }}</TextLink>
      <span>
        <label for="delete-modal" class="hover:cursor-pointer ml-auto">
          <TrashIcon class="ml-2 h-5 w-5" />
        </label>
      </span>
    </div>
  </div>

  <input type="checkbox" :id="modalId" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Are you sure you want to delete this collection?</h3>
      <p class="py-4">You cannot revert this process</p>
      <div class="modal-action">
        <label :for="modalId" class="btn btn-primary">Cancel</label>
        <label :for="modalId" class="btn btn-error" @click="$emit('onDeleteClick')">Delete</label>
      </div>
    </div>
  </div>
</template>
