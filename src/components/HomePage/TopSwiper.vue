<template>
  <div class="top-swiper">
    <swiper class="swiper-home"  :options="swiperOption">
      <!-- slides -->
      <swiper-slide data-swiper-autoplay="2000"><img src="@/assets/photo-1.png"></swiper-slide>
      <swiper-slide data-swiper-autoplay="2000"><img src="@/assets/photo-2.png"></swiper-slide>
      <swiper-slide data-swiper-autoplay="2000"><img src="@/assets/photo-3.png"></swiper-slide>
      <!-- Optional controls -->
      <!--
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      -->
    </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'topswiper',
  components: {
    swiper,
    swiperSlide
  },
  data(){
    return{
      swiperOption: {
        autoplay: true,
        speed: 1500,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '#swiper-pagination1',
          type: 'bullets',
          clickable :true,
          bulletActiveClass: 'my-bullet-active',
          bulletClass: 'my-bullet'
        },
        loop: true,
      }
    }
  }
}
</script>

<style scoped>
.swiper-home{
  position: absolute;
  width: 100%;
  height: 15.2rem;
  top: 3.1rem;
  left: 0;
}
.swiper-home img{
  width: 100%;
  height: 100%;
}
.swiper-button-prev{
  position: absolute;
  top: 50%;
  left: 0.35rem;
  width: 1.6rem;
  height: 3.2rem;
  background: url('../../assets/prev-button.png') no-repeat;
  background-size: 1.6rem 3.2rem;
}
.swiper-button-next{
  position: absolute;
  top: 50%;
  right: 0.35rem;
  width: 1.6rem;
  height: 3.2rem;
  background: url('../../assets/next-button.png') no-repeat;
  background-size: 1.6rem 3.2rem;
}
</style>
