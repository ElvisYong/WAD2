<script setup>
import { getUserCollections } from "../../apis/collections"
import { useRouter } from 'vue-router'
import { useAuth0 } from "@auth0/auth0-vue";
import { useToast } from "vue-toastification";
import { deleteUserCollection } from "../../apis/collections"

const toast = useToast();
const { user, isAuthenticated, } = useAuth0();

const userCollections = ref(null)
const router = useRouter();

onMounted(async () => {
  if (user.value) {
    try {
      if (user.value.sub) {
        const res = await getUserCollections(user.value.sub)
        userCollections.value = res.data.value
      }
    } catch (error) {
      console.log(error)
    }
  }
})

const gotoCollectionPage = (collection) => {
  router.push(
    {
      path: '/collection/:userId/:name',
      name: 'Collection',
      params: { userId: collection.userId, name: collection.collectionName },
    }
  )
}

const onDeleteClick = async (collection) => {
  const res = await deleteUserCollection(user.value.sub, collection.collectionName)
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
  <div v-if="userCollections === null">
    <Loader />
  </div>
  <div v-else>
    <div class="md: mx-3">
      <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10">
        <div v-for="collection in userCollections">
          <CollectionsCardItem @linkClick="gotoCollectionPage(collection)" @cardClick="gotoCollectionPage(collection)"
            @onDeleteClick="onDeleteClick(collection)" :collection="collection" />
        </div>
      </div>
    </div>
  </div>
</template>