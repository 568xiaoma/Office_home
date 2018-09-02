<template>
  <div class="home">
    <TopSwiper></TopSwiper>
    <Introduce></Introduce>
    <Photowall></Photowall>
    <LittleTitle></LittleTitle>
    <IPCC></IPCC>
    <MeetingRoom></MeetingRoom>
    <EICForum></EICForum>
    <OfficeWebsite></OfficeWebsite>
    <BottomBar></BottomBar>
    <Activity></Activity>
  </div>
</template>

<script>
import TopSwiper from '@/components/HomePage/TopSwiper.vue';
import Introduce from '@/components/HomePage/Introduce.vue';
import Photowall from '@/components/HomePage/Photowall.vue';
import IPCC from '@/components/HomePage/IPCC.vue';
import MeetingRoom from '@/components/HomePage/MeetingRoom.vue';
import EICForum from '@/components/HomePage/EICForum.vue';
import OfficeWebsite from '@/components/HomePage/OfficeWebsite.vue';
import BottomBar from '@/components/HomePage/BottomBar.vue';
import LittleTitle from '@/components/HomePage/LittleTitle.vue';
import Activity from '@/components/HomePage/Activity.vue';
export default {
  name: 'home',
  components: {
    TopSwiper,
    Introduce,
    Photowall,
    IPCC,
    MeetingRoom,
    EICForum,
    OfficeWebsite,
    BottomBar,
    LittleTitle,
    Activity
  }
}
</script>
<style scoped>

</style>

