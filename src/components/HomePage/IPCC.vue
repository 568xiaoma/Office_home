<template>
  <div class="IPCC">
    <img class="image" src="../../assets/background-8.jpg">
    <div class="text">
    <p>
      作为管理、协调整个学生会运作的核心，办公室在各个部门下设置监会,
      汇总部门的会议记录、反馈会议效果作为各个部门的评估。
      与各部门部长联系，督促、协助完成该部门的半季度部门报告。
    </p>
    <div class="little-title">
      管理学生会
    </div>
    <div class="title">
      监会IPCC
    </div>
    <div class=subtitle>
      学生会自我监管
    </div>
    <div class='hint'>
      --“多接触各位部长大佬”
    </div>
    <a href="/#/sheet"><button class="button-5">戳我填写监会表</button></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "IPCC",
}
</script>

<style scoped>
.IPCC{
  position: absolute;
  width: 100%;
  top: 82.3rem;
  left: 0;
  float: left;
  height: 19rem;
  background-size: 100% 100%;
}
.IPCC .image{
  position: absolute;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.text{
  position: absolute;
  color: rgb(255, 255, 255);
  background-color: rgba(0,0,0,0.7);
  width: 100%;
  height: 100%;
  z-index: 2;
}
.little-title{
  width: 6rem;
  margin: 2.1rem 3rem 0.2rem 0rem;
  float: right;
  font-weight: 500;
  color:rgb(100, 216, 236);
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 0.9rem;
  border: rgb(100, 216, 236) 0.1rem solid;
  border-radius: 0.4rem;
}
.title{
  margin: 0.3rem 3rem 0.2rem 0rem;
  padding-bottom: 0.2rem;
  float: right;
  color:rgba(255,255,255,1);
  font-weight: 700;
  font-family:'Times New Roman', Times, serif;
  font-size: 1.5rem;
}
.IPCC p{
  float: left;
  margin: 5.5rem 0rem 0rem 2.5rem;
  width: 8rem;
  padding: 0rem 0rem 0rem 0.5rem;
  border-left: rgb(100, 216, 236) 0.25rem solid;
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 0.7rem;
  color: rgb(100, 216, 236);
}
.IPCC img{
  z-index: 10;
  position: absolute;
  top: 2rem;
  left: 1.5rem;
  z-index: 10;
  height: 7rem;
  width: 4.2rem;
}
.subtitle{
  margin: 0rem 2.5rem 0rem 0rem;
  float: right;
  font-weight: 700;
  font-family: Microsoft JhengHei;
  font-size: 1rem;
  color: rgb(100, 216, 236);
}
.hint{
  position: absolute;
  font-style: italic;
  font-size: 0.7rem;
  color:rgb(218, 218, 218);
  width: 100%;
  top: 16rem;
}
.button-5{
  position: absolute;
  font-size: 0.8rem;
  color: rgb(100, 216, 236);
  padding: 0.5rem 0.5rem 0.5rem 0.5rem;
  right: 2.2rem;
  top: 11rem;
  width: 8rem;
  background-color: rgba(255, 255, 255, 0.178);
  border: rgb(100, 216, 236) 0.1rem solid;
  border-radius: 1rem;
  outline:none;
}
</style>

