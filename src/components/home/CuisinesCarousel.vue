<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper, } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Navigation, Pagination];
</script>

<!-- TODO: We will need to make custom navigation buttons for the carousel
have to use the useSwiper() api to get the swiper instance and call next on
button click instead of the default navigation button-->
<template>
  <Swiper :pagination="true" :navigation="true" :modules="modules" class="mt-3 text-center w-full h-full">
    <SwiperSlide class="object-fill">
      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
    </SwiperSlide>
    <SwiperSlide>
      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
    </SwiperSlide>
    <SwiperSlide>
      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
    </SwiperSlide>
    <SwiperSlide>
      <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
    </SwiperSlide>
  </swiper>
</template>
