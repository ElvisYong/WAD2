<script setup lang="ts">
import { useAuth0 } from '@auth0/auth0-vue';
const { logout } = useAuth0();

const onLogoutClick = () => {
  return logout({ returnTo: window.location.origin });
}

</script>

<template>
  <div>
    <button @click="onLogoutClick">Log out</button>
  </div>
</template>
