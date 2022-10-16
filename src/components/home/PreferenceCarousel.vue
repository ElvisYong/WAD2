<script setup>
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide, useSwiper, } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const modules = [Navigation, Pagination];

</script>
<!-- TODO: Finish up carousel component with actual content -->
<template>
  <Swiper :pagination="{
    type: 'progressbar',
  }" :navigation="true" :modules="modules" class="text-center w-full h-full">
    <SwiperSlide>
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
