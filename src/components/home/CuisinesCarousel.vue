<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper, } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Navigation, Pagination];
</script>

<template>
  <Swiper :pagination="true" :navigation="true" :modules="modules" class="text-center w-full h-full">
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
