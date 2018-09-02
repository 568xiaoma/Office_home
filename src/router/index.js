import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/views/HomePage'
import Sheet from '@/views/Sheet'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/sheet',
      name: 'Sheet',
      component: Sheet
    }
  ]
})
