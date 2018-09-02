<template>
  <div class="OfficeWebsite">
    <div class="little-title">
      自我更新
    </div>
    <br>
    <div class="title">
      网站维护
    </div>
    <div class="subtitle">
      网站维护与更新
    </div>
    <p>
      办公室网站是为了方便办公室联络各个监会，整合资料，为学生会提供一个便利的通道而搭建的。
      办公室需要参与维护网站的内容与逻辑正确性。
      办公室会分享网站搭建、维护的相关内容，让部员参与现实网站的搭建与维护。
    </p>
    <a href="http://www.runoob.com/html/html5-intro.html"><button class="button2">
      学习网站制作
    </button></a>
    <div class='hint'>
      --“网站等你来设计！”
    </div>
  </div>
</template>

<script>
export default {
  name: "OfficeWebsite",
}
</script>

<style scoped>
.OfficeWebsite{
  position: absolute;
  width: 100%;
  top: 138.8rem;
  left: 0;
  float: left;
  height: 18.4rem;
  background: url('../../assets/background-4.png') no-repeat;
  background-size: 100% 100%;
}
.little-title{
  width: 1.2rem;
  margin: 3.5rem 0rem 0.2rem 3rem;
  padding: 0.5rem 0rem 0.5rem 0rem;
  float: left;
  color:rgb(250, 163, 32);
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 0.9rem;
  line-height: 1rem;
  border: rgb(250, 163, 32) 0.1rem solid;
  border-radius: 0.4rem;
}
.title{
  margin: 2rem 0rem 0.5rem 0.5rem;
  width:1.5rem;
  line-height: 1.5rem;
  padding-right: 0.8rem;
  float: left;
  color:rgba(0,0,0,1);
  font-weight: 700;
  font-family:'Times New Roman', Times, serif;
  font-size: 1.5rem;
}
.subtitle{
  margin: 1.8rem 0rem 0rem 0rem;
  width:1.5rem;
  line-height: 1.2rem;
  padding-right: 0.8rem;
  float: left;
  font-weight: 700;
  font-family: Microsoft JhengHei;
  font-size: 1rem;
  color: rgb(250, 163, 32);
}
.OfficeWebsite p{
  float: left;
  border-left: rgb(250, 163, 32) 0.25rem solid;
  padding: 0rem 0.5rem 0rem 0.5rem;
  margin: 2.5rem 0rem 0rem 2rem;
  width: 8rem;
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 0.7rem;
  color: rgb(0,0,0);
}
.OfficeWebsite img{
  z-index: 10;
  position: absolute;
  top: 2rem;
  left: 1.5rem;
  z-index: 10;
  height: 7rem;
  width: 4.2rem;
}
.button2{
  position: absolute;
  font-size: 0.8rem;
  font-weight: 500;
  color: rgb(250, 163, 32);
  padding: 0.5rem 0.8rem 0.5rem 0.8rem;
  line-height: 1rem;
  left: 2.5rem;
  top: 12.5rem;
  width: 8rem;
  background-color: rgba(0,0,0,0);
  border: rgb(250, 163, 32) 0.1rem solid;
  border-radius: 1.2rem;
  outline:none;
}
.hint{
  position: absolute;
  font-style: italic;
  font-size: 0.7rem;
  color:rgb(179, 179, 179);
  width: 100%;
  top: 15.5rem;
}
</style>

