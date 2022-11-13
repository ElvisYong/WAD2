<script setup>
import { defineProps, ref } from 'vue';
import { TrashIcon } from '@heroicons/vue/20/solid'
import { useToast } from "vue-toastification";
import { useAuth0 } from "@auth0/auth0-vue";
import { deleteUserCollection } from "../../apis/collections"

const toast = useToast();
const { user } = useAuth0();
const props = defineProps(['collection'])
const emits = defineEmits(["linkClick", "cardClick"])
const collection = ref(props.collection)

const onDeleteClick = async () => {
  const res = await deleteUserCollection(user.value.sub, collection.value.collectionName)
  console.log(res)
  if (res.statusCode.value === 200) {
    toast.success("Collection deleted")
    document.location.reload()
    // document.location.href="/profile";
  } else {
    toast.error("Failed to delete collection")
  }
}

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

    <div class="flex mt-1 text-xl md:text-lg lg:text-md">
      <TextLink @click="$emit('linkClick')" class="text-left">{{ collection.collectionName }}</TextLink>
      <label for="delete-modal" class="hover:cursor-pointer ml-auto">
        <TrashIcon class="ml-2 h-5 w-5" />
      </label>
    </div>
  </div>

  <input type="checkbox" id="delete-modal" class="modal-toggle" />
  <div class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Are you sure you want to delete this collection?</h3>
      <p class="py-4">You cannot revert this process</p>
      <div class="modal-action">
        <label for="delete-modal" class="btn btn-primary">Cancel</label>
        <label for="delete-modal" class="btn btn-error" @click="() => onDeleteClick()">Delete</label>
      </div>
    </div>
  </div>
</template>
