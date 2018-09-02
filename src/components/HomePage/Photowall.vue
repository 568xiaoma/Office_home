<template>
  <div class="Photowall">
    <div class='big-title'>
      <div class='title-1'>JOIN US</div>
      <div class='title-2'>锻炼你的能力！</div>
      <div class='title-3'>"We want you!"</div>
    </div>
    <div @click="show1=!show1">
      <div class="photo-1"></div>
      <transition name='fade'>
        <div v-if='show1' class='text-1'>
          <p class="p1">活动人员安排</p>
          <p>锻炼你的交际、统筹、策划能力！</p>
        </div>
      </transition>
    </div>
    <div @click="show2=!show2">
      <div class="photo-2"></div>
      <transition name='fade'>
        <div v-if='show2' class='text-2'>
         <p class="p1">论坛管理</p>
          <p>来！体验一把当版主的感觉</p>
        </div>
      </transition>
    </div>
    <div @click="show3=!show3">
      <div class="photo-3"></div>
      <transition name='fade'>
        <div v-if='show3' class='text-3'>
          <p class="p1">文档处理</p>
          <p>职场必备，Office操作，学长学姐分享与你！</p>
        </div>
      </transition>
    </div>
    <div @click="show4=!show4">
      <div class="photo-4"></div>
      <transition name='fade'>
        <div v-if='show4' class='text-4'>
          <p class="p1">网站维护</p>
          <p>学习网站制作、维护，网站等你来设计！</p>
        </div>
      </transition>
    </div>
    <div @click="show5=!show5">
      <div class="photo-5"></div>
      <transition name='fade'>
        <div v-if='show5' class='text-5'>
          <p class="p1">学生会监会</p>
          <p>学生会高效运转的保障，联系学生会各个部门</p>
        </div>
      </transition>
    </div>
    <div @click="show6=!show6">
      <div class="photo-6"></div>
      <transition name='fade'>
        <div v-if='show6' class='text-6'>
          <p class="p1">交流更多</p>
          <p>与外界、部长等交流更多，提升能力、提升眼界</p>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Photowall',
  data(){
    return{
    show1: true,
    show2: true,
    show3: true,
    show4: true,
    show5: true,
    show6: true,
    }
  },
  methods: {
  },
}
</script>
<style scoped>
p{
  color: white;
  padding: 0rem 2rem 0rem 2rem;
}
.p1{
  margin-top: 2rem;
  font-family: STHeiti;
  font-size: 1rem;
  font-weight: 900;
}
.big-title{
  position: absolute;
  color: rgb(255, 255, 255);
  top: 32.3rem;
  left: 0rem;
  background-color: rgb(39, 39, 39);
  width: 100%;
  height: 10rem;
}
.big-title .title-1{
  width: 6rem;
  color: rgb(233, 105, 0);
  font-weight: 900;
  font-size: 1.3rem;
  margin: 1.6rem 0rem 0rem 5.5rem;
  padding: 0rem 5rem 0rem 0rem; 
  border-bottom: 0.3rem rgb(233, 105, 0) solid;
}
.big-title .title-2{
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
  font-size: 1.8rem;
  margin: 0.5rem 0rem 0rem 0rem;
}
.big-title .title-3{
  width: 8rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.616);
  font-family: Verdana;
  font-size: 0.8rem;
  margin: 0.5rem 0rem 0rem 7.2rem;
}
.photo-1{
  z-index: 2;
  position: absolute;
  top: 42.3rem;
  left: 0rem;
  height: 10rem;
  width: 50%;
  background: url('../../assets/activity.jpg') no-repeat;
  background-size: 100% 100%;
}
.text-1{
  z-index: 2;
  color:rgba(255, 255, 255,0.6);
  text-align: center;
  font-size: 0.8rem;
  position: absolute;
  top: 42.3rem;
  left: 0rem;
  height: 10rem;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.623);
}
.photo-2{
  z-index: 2;
  position: absolute;
  top: 42.3rem;
  left: 50%;
  height: 10rem;
  width: 50%;
  background: url('../../assets/forum.png') no-repeat;
  background-size: 100% 100%;
}
.text-2{
  z-index: 2;
  color:rgba(255, 255, 255,0.6);
  text-align: center;
  font-size: 0.8rem;
  position: absolute;
  top: 42.3rem;
  left: 50%;
  height: 10rem;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.623);
}
.photo-3{
  z-index: 2;
  position: absolute;
  top: 52.3rem;
  left: 0rem;
  height: 10rem;
  width: 50%;
  background: url('../../assets/word.png') no-repeat;
  background-size: 100% 100%;
}
.text-3{
  z-index: 2;
  color:rgba(255, 255, 255,0.6);
  text-align: center;
  font-size: 0.8rem;
  position: absolute;
  top: 52.3rem;
  left: 0rem;
  height: 10rem;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.623);
}
.photo-4{
  z-index: 2;
  position: absolute;
  top: 52.3rem;
  left: 50%;
  height: 10rem;
  width: 50%;
  background: url('../../assets/website.png') no-repeat;
  background-size: 100% 100%;
}
.text-4{
  z-index: 2;
  color:rgba(255, 255, 255,0.6);
  text-align: center;
  font-size: 0.8rem;
  position: absolute;
  top: 52.3rem;
  left: 50%;
  height: 10rem;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.623);
}
.photo-5{
  z-index: 2;
  position: absolute;
  top: 62.3rem;
  left: 0rem;
  height: 10rem;
  width: 50%;
  background: url('../../assets/IPCC.png') no-repeat;
  background-size: 100% 100%;
}
.text-5{
  z-index: 2;
  color:rgba(255, 255, 255,0.6);
  text-align: center;
  font-size: 0.8rem;
  position: absolute;
  top: 62.3rem;
  left: 0rem;
  height: 10rem;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.623);
}
.photo-6{
  z-index: 2;
  position: absolute;
  top: 62.3rem;
  left: 50%;
  height: 10rem;
  width: 50%;
  background: url('../../assets/communication.png') no-repeat;
  background-size: 100% 100%;
}
.text-6{
  z-index: 2;
  color:rgba(255, 255, 255,0.6);
  text-align: center;
  font-size: 0.8rem;
  position: absolute;
  top: 62.3rem;
  left: 50%;
  height: 10rem;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.623);
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>

