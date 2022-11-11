<script setup>
import { onMounted } from 'vue'

const center = ref({ lat: 1.3521, lng: 103.8198 })

const latitude = ref(null)
const longitude = ref(null)
const markers = ref([])

onMounted(() => {
  navigator.geolocation.getCurrentPosition(position => {
    latitude.value = position.coords.latitude
    longitude.value = position.coords.longitude
    center.value = { lat: latitude.value, lng: longitude.value }
    console.log(center.value)
  }, error => {
    console.log(error.message)
  })
});

watch([latitude, longitude],
  () => {
    markers.value.push({
      position: { lat: latitude.value, lng: longitude.value },
    })
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
        @click="center.value = m.position" />
    </GMapMap>
  </div>
</template>