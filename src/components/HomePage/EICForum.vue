<template>
  <div class="EICForum">
    <div class="image">
    <img src="../../assets/background-5.png">
    </div>
    <div class="text">
      <div class="little-title">
        服务学生
      </div>
      <div class='title'>
        学生论坛
      </div>
      <div class='subtitle'>
        分享你我他 学生资源共享平台
      </div>
      <div class='passage'>
        学生会为了整合学生资料，便利学生们高效地查阅、分享资料，由办公室发起、联合技术部完成论坛的搭建。
        办公室负责维护论坛的风气以及内容有序性，分配各部门共同累积论坛的丰富性。
        同时，为同学们提供一个交流，吐槽的园地。
      </div>
    </div>
    <a href="http://47.106.111.48:4567"><button class='button3'>戳我访问论坛</button></a>
    <a href="https://raw.githubusercontent.com/568xiaoma/EIC_App_image/master/EIC%E8%AE%BA%E5%9D%9B%20.apk"><button class='button4'>下载APP</button></a>
    <div class='hint'>
      --“想体验当版主的感觉吗？”
    </div>
  </div>
</template>

<script>
export default {
  name: "EICForum",
}
</script>

<style scoped>
.EICForum{
  position: absolute;
  width: 100%;
  top: 120rem;
  left: 0;
  float: left;
  height: 19rem;
  background-size: 100% 100%;
}
.EICForum img{
  position: absolute;
  left:0;
  width: 100%;
  height: 100%;
}
.text{
  position: absolute;
  color: rgb(255, 255, 255);
  background-color: rgba(0,0,0,0.7);
  width: 100%;
  height: 100%;
  z-index: 2;
}
.image{
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.title{
  margin: 0.3rem 0rem 0.2rem 3.5rem;
  padding-bottom: 0.2rem;
  padding-right: 1.9rem;
  float: left;
  color:rgba(255,255,255,0.9);
  font-weight: 700;
  font-family:'Times New Roman', Times, serif;
  font-size: 1.5rem;
}
.little-title{
  width: 6rem;
  margin: 1.2rem 5.2rem 0.8rem 8.5rem;
  float: left;
  font-weight: 500;
  color:rgb(255, 255, 255);
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 0.9rem;
  border: rgb(255, 255, 255) 0.1rem solid;
  border-radius: 0.4rem;
}
.subtitle{
  position: absolute;
  top: 5.8rem;
  left: 3rem;
  padding-left: 0.5rem; 
  font-family: Microsoft JhengHei;
  font-size: 1rem;
  font-weight: 600;
  color: rgb(93, 199, 7);
}
.passage{
  float: left;
  margin: 1.5rem 3.5rem 0rem 3rem;
  padding: 0rem 0rem 0rem 0.5rem;
  border-left: rgb(93, 199, 7) 0.25rem solid;
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.884);
}
.button3{
  z-index: 3;
  position: absolute;
  font-size: 0.8rem;
  color: rgb(93, 199, 7);
  padding: 0.4rem 0rem 0.4rem 0rem;
  left: 3rem;
  top: 13.8rem;
  width: 10rem;
  background-color: rgba(0,0,0,0);
  border: rgb(93, 199, 7) 0.1rem solid;
  border-radius: 1rem;
  outline:none;
}
.button4{
  z-index: 3;
  position: absolute;
  font-size: 0.8rem;
  color: rgb(245, 245, 245);
  padding: 0.4rem 0rem 0.4rem 0rem;
  right: 3rem;
  top: 13.8rem;
  width: 6rem;
  background-color: rgba(255,255,255,0.3);
  border: rgba(228, 228, 228, 0.726) 0.1rem solid;
  border-radius: 1rem;
  outline:none;
}
.hint{
  z-index: 3;
  position: absolute;
  font-style: italic;
  font-size: 0.7rem;
  color:rgba(218, 218, 218, 0.767);
  width: 100%;
  top: 16.5rem;
}
</style>

