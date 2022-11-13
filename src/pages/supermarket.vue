<script setup>
import { onMounted } from 'vue'
import { useToast } from "vue-toastification";
import { nearbySearch } from '../apis/gmaps'

useHead({
  title: "Locator",
});

const toast = useToast();

const center = ref({ lat: 1.3521, lng: 103.8198 })
const currentPos = ref({ lat: 1.3521, lng: 103.8198 })

const markers = ref([])
const keyword = ref("")
const vicinity = ref(100)

const fetchNearbySuperMarket = async () => {
  const { lat, lng } = center.value
  const { data } = await nearbySearch(keyword.value, vicinity.value, lat, lng, "")
  const nearbySupermarkets = data.value.results

  // Clear the array first
  markers.value.splice(0, markers.value.length)

  markers.value.push({
    position: {
      lat: lat,
      lng: lng
    },
  })

  for (const supermarket of nearbySupermarkets) {
    markers.value.push({
      position: {
        lat: supermarket.geometry.location.lat,
        lng: supermarket.geometry.location.lng
      },
      ...supermarket
    })
  }
}

onMounted(() => {
  navigator.geolocation.getCurrentPosition(position => {
    center.value = { lat: position.coords.latitude, lng: position.coords.longitude }
    currentPos.value = { lat: position.coords.latitude, lng: position.coords.longitude }
  }, error => {
    toast.error("Failed to get your location. Please enable location to search for nearby supermarkets!")
  })
});

watch(currentPos,
  async () => {
    markers.value.push({
      position: { lat: currentPos.value.lat, lng: currentPos.value.lng},
    })
    await fetchNearbySuperMarket();
  }
)

watch(vicinity, async () => {
  markers.value = []
  await fetchNearbySuperMarket();
})

</script>

<template>
  <div class="mt-10 container flex flex-col mx-32" v-motion-fade>
    <h1 class="text-2xl font-bold">Missing Ingredients? Look no further!</h1>

    <div class="mt-1">
      <div class="form-control w-full max-w-xs">
        <input type="text" v-model="keyword" placeholder="Enter Supermarket Name Here" class="input input-bordered w-full max-w-xs" />
        <label class="label">
          <span class="label-text-alt">e.g ntuc</span>
        </label>
      </div>
      <button class="btn btn-primary btn-sm" @click="fetchNearbySuperMarket">Search</button>
    </div>

    <div class="flex flex-col my-3">

      <div class="flex gap-2 mt-3">
        <h2>Nearby vicinity range</h2>
        <button class="btn btn-primary btn-sm" @click="vicinity = 100">100m</button>
        <button class="btn btn-primary btn-sm" @click="vicinity = 500">500m</button>
        <button class="btn btn-primary btn-sm" @click="vicinity = 1000">1km</button>
        <button class="btn btn-primary btn-sm" @click="vicinity = 5000">5km</button>
      </div>
    </div>

    <div v-if="currentPos.lng !== null && currentPos.lat !== null && markers.length > 0">
      <GMapMap :center="center" :zoom="18" map-type-id="terrain" style="width: 100vh; height: 80vh;">
        <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
          @click="center = m.position">
          <div v-if="currentPos.lat === m.position.lat && currentPos.lng === m.position.lng">
            <GMapInfoWindow>
              <span class="font-bold text-primary">You are here!</span>
            </GMapInfoWindow>
          </div>

          <div v-else>
            <GMapInfoWindow>
              <div class="flex flex-col">
                <span class="font-bold">{{ m.name }}</span>
                <span>{{ m.vicinity }}</span>
              </div>
            </GMapInfoWindow>
          </div>
        </GMapMarker>
      </GMapMap>
    </div>
    <div class="self-start" v-else>
      <GMapMap :center="center" :zoom="16" map-type-id="terrain" style="width: 100vh; height: 80vh;">
      </GMapMap>
    </div>

  </div>
</template>