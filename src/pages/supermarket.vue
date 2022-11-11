<script setup>
import { ViewColumnsIcon } from '@heroicons/vue/20/solid';
import { onMounted } from 'vue'
import { nearbySearch } from '../apis/gmaps'

const center = ref({ lat: 1.3521, lng: 103.8198 })
const currentPos = ref()
const latitude = ref(null)
const longitude = ref(null)
const markers = ref([])
const keyword = ref("Supermarket")
const vicinity = ref(1000)

const fetchNearbySuperMarket = async () => {
  const { lat, lng } = center.value
  const { data } = await nearbySearch(keyword.value, vicinity.value, lat, lng, "Supermarket")
  const nearbySupermarkets = data.value.results

  // Clear the array first
  markers.value.splice(0, markers.value.length)


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
    latitude.value = position.coords.latitude
    longitude.value = position.coords.longitude
    center.value = { lat: latitude.value, lng: longitude.value }
    currentPos.value = { lat: latitude.value, lng: longitude.value }
  }, error => {
    console.log(error.message)
  })
});

watch([latitude, longitude],
  async () => {
    markers.value.push({
      position: { lat: latitude.value, lng: longitude.value },
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
  <div class="mt-10">
    <h1 class="text-2xl font-bold">Nearby supermarkets within your vicinity!</h1>

    <div class="flex flex-col my-3">
      <div class="flex flex-col">
        <h2 class="font-bold">Search supermarket</h2>
        <div>
          <input v-model="keyword" type="text" class="input input-bordered input-primary w-80 mt-1"
            placeholder="Enter a keyword" />
          <button class="btn btn-primary ml-3">GO</button>
        </div>
      </div>

      <div class="flex gap-2 mt-3">
        <h2>Nearby vicinity range</h2>
        <button class="btn btn-primary btn-sm" @click="vicinity = 1000">1000m</button>
        <button class="btn btn-primary btn-sm" @click="vicinity = 3000">3000m</button>
        <button class="btn btn-primary btn-sm" @click="vicinity = 5000">5000m</button>
      </div>
    </div>

    <div v-if="latitude !== null && longitude !== null && markers.length > 0">
      <GMapMap :center="center" :zoom="16" map-type-id="terrain" style="width: 100vw; height: 900px">
        <GMapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true"
          @click="center = m.position">
          <div v-if="currentPos.lat === m.position.lat && currentPos.lng === m.position.lng">
            <GMapInfoWindow>
              <span class="font-bold">You are here!</span>
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
  </div>
</template>