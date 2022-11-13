<script setup>
import { defineProps, ref } from 'vue';
import { StarIcon } from '@heroicons/vue/20/solid';
import { useAuth0 } from "@auth0/auth0-vue";
import { addRecipeIdToCollection, deleteRecipeIdFromCollection } from "../../apis/collections";
import { useToast } from "vue-toastification";

const toast = useToast();
const { user, isAuthenticated } = useAuth0();

const props = defineProps(['title', 'image', 'tags', 'diets', 'cuisines', 'userCollections', 'recipeId'])
const emits = defineEmits(["linkClick", "cardClick"])

const recipeId = ref(props.recipeId)
const title = ref(props.title)
const image = ref(props.image)
const diets = ref(props.diets)
const cuisines = ref(props.cuisines)
const userCollections = ref(props.userCollections)
const checkedBoxes = ref([])

onMounted(async () => {
  if (image.value === undefined) {
    image.value = '/chef.jpg'
  }

  if (user.value) {
    try {
      if (user.value.sub) {
        // Populate the checkbox
        for (const collection of userCollections.value) {
          console.log(collection.recipes)
          console.log(recipeId.value)
          if (collection.recipes.includes(recipeId.value)) {
            checkedBoxes.value.push(collection.collectionName)
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
})

watch(userCollections.value, () => {
  if (user.value) {
    try {
      if (user.value.sub) {
        // Populate the checkbox
        for (const collection of userCollections.value) {
          if (collection.recipes.includes(recipeId.value)) {
            checkedBoxes.value.push(collection.collectionName)
          }
        }
      }
    } catch (error) {
      console.log(error)
    }
  }
})

const addToCollection = async (collectionName) => {
  if (user.value) {
    const userId = user.value.sub

    let res = await addRecipeIdToCollection(userId, collectionName, recipeId.value)
    if (res.statusCode.value === 200) {
      toast.success("Added to collection")
    } else {
      toast.error("Failed to add to collection")
    }
  }
}

const removeFromCollection = async (collectionName) => {
  if (user.value) {
    const userId = user.value.sub

    let res = await deleteRecipeIdFromCollection(userId, collectionName, recipeId.value)
    if (res.statusCode.value === 200) {
      toast.success("Delete from collection")
    } else {
      toast.error("Failed to remove from collection")
    }
  }
}

const checkEvent = async (event) => {
  const collectionName = event.target.id
  if (event.target.checked) {
    await addToCollection(collectionName)
  } else {
    await removeFromCollection(collectionName)
  }
}

</script>

<template>
  <div>
    <div @click="$emit('cardClick')" class="avatar cursor-pointer">
      <div class="w-80 md:w-60 lg:w-56 rounded-lg relative">
        <div class="absolute inset-0 bg-cover bg-center z-0">
          <img class="rounded" :src="image" />
        </div>
        <div
          class="opacity-0 hover:opacity-60 absolute inset-0 flex justify-center text-sm text-white py-2 bg-black items-center">
          <div v-if="cuisines && cuisines.length > 0">
            {{ cuisines[0] }}
          </div>
          <div v-else-if="diets && diets.length > 0">
            {{ diets[0] }}
          </div>
        </div>
      </div>
    </div>

    <div class="flex text-xl mt-1 md:text-md lg:text-sm">
      <TextLink @click="$emit('linkClick')" class="text-left">{{ title }}</TextLink>
      <label for="collectionsModal" class="ml-auto btn btn-primary btn-circle btn-sm self-top">
        <StarIcon class="h-4 w-4" />
      </label>
    </div>

  </div>

  <input type="checkbox" id="collectionsModal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Save To Collections</h3>
      <div v-if="isAuthenticated">
        <div v-if="userCollections.length === 0">
          <p class="mt-3">You have no collections yet</p>
        </div>
        <!-- checkbox -->
        <div v-else v-for="collection in userCollections">
          <div class="flex flex-row items-center gap-2">
            <input @change="checkEvent" type="checkbox" v-model="checkedBoxes" :value="collection.collectionName"
              :id="collection.collectionName" />
            <label :for="collection.collectionName">{{ collection.collectionName }}</label>
          </div>
        </div>
      </div>
      <div v-else>
        <p>You're not logged in</p>
      </div>
      <div class="modal-action">
        <label for="collectionsModal" class="btn">Close</label>
      </div>
    </div>
  </div>
</template>
