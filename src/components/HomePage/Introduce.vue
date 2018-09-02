<template>
  <div class="Introduce">
    <div class="title-1">我们是谁</div>
    <div class="title-2">
      <div>电子信息与通信学院</div>
      <div>办公室</div>
    </div>
    <p>
      学生会运转的核心,协助策划、组织、安排、协调院系各大学生活动，为活动的顺利进行提供保障。
      协调整个院系学生会的运转情况，在各部门下设置监会，对各个部门进行跟踪评估，保持学生会各部门的高效运行。
      管理学院论坛的运维，联系其他部门整理资料，服务于广大同学。
    </p>
    <a href="http://mp.weixin.qq.com/s?__biz=MzA5Mjk1OTM2OA==&mid=2652256134&idx=1&sn=4ae2f92d363624907fb50bb906d91e07&chksm=8b87b061bcf03977b5d2a95c18885928af017c219239aac3318d2ab1de536c9b222da0e960bf&mpshare=1&scene=23&srcid=0816V88ejApleCOHY1RgIR4x#rd">
      <button class="button1">了解更多</button>
    </a>
  </div>
</template>

<script>
export default{
  name: 'Introduce',
}


</script>

<style scoped>
.Introduce{
  position: absolute;
  width: 100%;
  top: 18.3rem;
  left: 0;
  float: left;
  height: 14rem;
  background: url('../../assets/background-7.png') no-repeat;
  background-size: 100% 100%;
}
.Introduce .title-1{
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 900;
  color: rgb(0, 0, 0);
  margin: 1.6rem 0rem 0rem 1.8rem;
  padding-right: 0.8rem;
  border-right:  0.2rem solid rgb(29, 29, 29);
}
.Introduce .title-2{
  display: inline-block;
  font-size: 0.8rem;
  color: rgb(0, 0, 0);
  margin: 2.0rem 0rem 0rem 0.9rem;
  padding-right: 0.8rem;
}
.Introduce p{
  padding: 0rem 1.8rem 0rem 2.0rem;
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 0.7rem;
  color: rgb(0, 0, 0);
}
.button1{
  width: 10rem;
  height: 2rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0);
  color: rgb(0, 0, 0);
  margin:0;
  padding: 0;
  border: rgba(0, 0, 0, 0.897) 0.1rem solid;
  border-radius: 0.4rem;
  outline:none;
}
</style>
