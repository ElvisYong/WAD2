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
const vicinity = ref(100)

const fetchNearbySuperMarket = async () => {
  const { lat, lng } = center.value
  const { data } = await nearbySearch(keyword.value, vicinity.value, lat, lng, "Supermarket")
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
  <div class="mt-10 container flex flex-col mx-32">
    <h1 class="text-2xl font-bold">Nearby supermarkets within your vicinity!</h1>

    <div>
      <div class="form-control w-full max-w-xs">
        <label class="label">
          <span class="label-text">Search supermarket keywords</span>
        </label>
        <input type="text" v-model="keyword" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
        <label class="label">
          <span class="label-text-alt"></span>
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
      </div>
    </div>

    <div v-if="latitude !== null && longitude !== null && markers.length > 0">
      <GMapMap :center="center" :zoom="16" map-type-id="terrain" style="width: 100vh; height: 100vh;">
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