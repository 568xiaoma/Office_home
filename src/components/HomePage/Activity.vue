<template>
  <div class="EICForum">
    <div class="image">
    <img src="../../assets/background-9.jpg">
    </div>
    <div class="text">
      <div class="little-title">
        学生活动
      </div>
      <div class='title'>
        学生活动安排
      </div>
      <div class='subtitle'>
        <p>
          学生会各活动人员安排
        </p>
      </div>
      <div class='passage'>
        办公室帮助学生会安排学生会各个活动、路演的人员，联络各个活动负责人，参与帮助学生活动的顺利进行。
        协调，统筹各个活动人员安排的合理性，与部门合理沟通，确保人员安排不冲突，高效完成活动安排。
      </div>
    </div>
    <div class='hint'>
      --“安排上！”
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
  top: 157.2rem;
  left: 0;
  float: left;
  height: 20rem;
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
  margin: 0.3rem 3rem 0.2rem 4rem;
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
  margin: 1.2rem 5.2rem 1rem 8.5rem;
  float: left;
  font-weight: 500;
  color:rgb(255, 255, 255);
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 0.9rem;
  border: rgb(255, 255, 255) 0.1rem solid;
  border-radius: 0.4rem;
}
.subtitle{
  float: left;
  margin: 0.2rem 3rem 0rem 4rem;
}
.subtitle p{
  color:rgb(0, 255, 255);
  margin: 0;
  font-size: 1rem;
  font-family: Microsoft JhengHei;
}
.passage{
  float: left;
  margin: 2.5rem 4rem 0rem 4rem;
  padding: 0rem 0rem 0rem 0.5rem;
  border-left: rgb(0, 255, 255) 0.25rem solid;
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.884);
}
.hint{
  z-index: 3;
  position: absolute;
  font-style: italic;
  font-size: 0.7rem;
  color:rgba(218, 218, 218, 0.767);
  width: 100%;
  top: 17rem;
}
</style>

