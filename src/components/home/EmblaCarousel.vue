<script setup>
import emblaCarouselVue from 'embla-carousel-vue'
import Autoplay from 'embla-carousel-autoplay'
const [emblaNode] = emblaCarouselVue({ loop: false }, [Autoplay()])

</script>

<!-- TODO: Finish up carousel component -->
<template>
  <div class="embla" ref="emblaNode">
    <div class="embla__viewport">
      <div class="embla__container">
        <div class="embla__slide">
          <div class="embla__slide__inner">
            <img class="embla__slide__img" src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </div>
        </div>
      </div>

      <div class="embla__container">
        <div class="embla__slide">
          <div class="embla__slide__inner">
            <img class="embla__slide__img" src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </div>
        </div>
      </div>

      <div class="embla__container">
        <div class="embla__slide">
          <div class="embla__slide__inner">
            <img class="embla__slide__img" src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
