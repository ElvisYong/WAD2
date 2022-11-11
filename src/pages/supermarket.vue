<script setup>
import { onMounted } from 'vue'
import { nearbySearch } from '../apis/gmaps'

const center = ref({ lat: 1.3521, lng: 103.8198 })
const currentPos = ref()
const latitude = ref(null)
const longitude = ref(null)
const markers = ref([])

const fetchNearbySuperMarket = async () => {
  const { lat, lng } = center.value
  const { data } = await nearbySearch("Supermarket", 1000, lat, lng, "Supermarket")
  const nearbySupermarkets = data.value.results
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

const setPlace = (event) => {
  console.log(event)
}

</script>

<template>
  <GMapAutocomplete placeholder="Search places" @place_changed="setPlace">
  </GMapAutocomplete>

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
</template>