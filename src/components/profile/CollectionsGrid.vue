<script setup>
import { getUserCollections } from "../../apis/collections"
import { useRouter } from 'vue-router'
import { useAuth0 } from "@auth0/auth0-vue";

const userCollections = ref([])
const { user, isAuthenticated, } = useAuth0();
const router = useRouter();

watch(user, async () => {
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

</script>

<template>
  <div class="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 md:gap-10">
    <div v-for="collection in userCollections">
      <CollectionsCardItem @click="gotoCollectionPage(collection)" :collection="collection" />
    </div>
  </div>
</template>