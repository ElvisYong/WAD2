<script setup>
import { onMounted } from "vue";
import { useAuth0 } from "@auth0/auth0-vue";
import { StarIcon } from '@heroicons/vue/20/solid';
import { addRecipeIdToCollection, getUserCollections, deleteRecipeIdFromCollection } from "../../apis/collections";
import { useToast } from "vue-toastification";

const toast = useToast();
const { user, isAuthenticated } = useAuth0();

const props = defineProps(['recipe'])
const recipe = ref(props.recipe)
const image = ref(props.recipe.image)
const userCollections = ref([])
const checkedBoxes = ref([])

onMounted(async () => {
  if (image.value === undefined) {
    image.value = '/chef.jpg'
  }

  if (user.value) {
    try {
      if (user.value.sub) {
        const res = await getUserCollections(user.value.sub)
        userCollections.value = res.data.value

        // Populate the checkbox
        for (const collection of res.data.value) {
          if (collection.recipes.includes(recipe.value.id)) {
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
    const recipeId = recipe.value.id


    let res = await addRecipeIdToCollection(userId, collectionName, recipeId)
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
    const recipeId = recipe.value.id

    let res = await deleteRecipeIdFromCollection(userId, collectionName, recipeId)
    if (res.statusCode.value === 200) {
      toast.success("Delete from collection")
    } else {
      toast.error("Failed to add to collection")
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
          <label for="collectionsModal" class="btn btn-primary btn-circle">
            <StarIcon class="h-5 w-5" />
          </label>
        </div>
        <div class="avatar mr-0">
          <div class="w-96 rounded">
            <img :src="image" />
          </div>

        </div>
      </div>
    </div>

    <input type="checkbox" id="collectionsModal" class="modal-toggle" />
    <div class="modal modal-bottom sm:modal-middle">
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
          <p>Failed to get collections</p>
        </div>
        <div class="modal-action">
          <label for="collectionsModal" class="btn">Yay!</label>
        </div>
      </div>
    </div>

  </div>
</template>