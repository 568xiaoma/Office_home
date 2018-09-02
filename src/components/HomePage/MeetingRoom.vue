<template>
  <div class="MeetingRoom">
    <div class="little-title">
      服务学生会
    </div>
    <br>
    <div class="title">
      会议室管理
      <div>会议室管理与维护</div>
    </div>
    <p>
      会议室是学生会各部门开会的地方。
      办公室负责会议室的借用、管理、维护保证会议室有序使用，维持会议室的环境，为学生会各部门的提供便利。
      办公室合理安排各个时间段的会议室借用，监督会议室使用规范以及其内物品的借用。
    </p>
    <a href="http://119.23.218.94/"><button class="button2">
      关于会议室借用
    </button>
    </a>
    <div class='hint'>
      --“锻炼你的管理能力！”
    </div>
  </div>
</template>

<script>
export default {
  name: "MeetingRoom",
}
</script>

<style scoped>
.MeetingRoom{
  position: absolute;
  width: 100%;
  top: 101.1rem;
  left: 0;
  float: left;
  height: 19rem;
  background: url('../../assets/background-9.png') no-repeat;
  background-size: 100% 100%;
}
.little-title{
  width: 6rem;
  margin: 2.5rem 8rem 0.2rem 3rem;
  float: left;
  color:rgb(250, 163, 32);
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 0.9rem;
  border: rgb(250, 163, 32) 0.1rem solid;
  border-radius: 0.4rem;
}
.title{
  margin: 0.2rem 0rem 0.5rem 2.5rem;
  padding-bottom: 0.2rem;
  float: left;
  color:rgba(0,0,0,1);
  font-weight: 700;
  font-family:'Times New Roman', Times, serif;
  font-size: 1.5rem;
}
.title div{
  margin-top: 0.5rem;
  padding-left: 0.5rem; 
  font-family: Microsoft JhengHei;
  font-size: 1rem;
  color: rgb(250, 163, 32);
}
.MeetingRoom p{
  float: left;
  border-left: rgb(250, 163, 32) 0.25rem solid;
  padding: 0rem 0rem 0rem 0.5rem;
  margin: 1rem 4rem 0rem 3rem;
  text-align: left;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-size: 0.7rem;
  color: rgb(0,0,0);
}
.button2{
  position: absolute;
  font-size: 0.8rem;
  color: rgb(250, 163, 32);
  padding: 0.4rem 0rem 0.4rem 0rem;
  right: 2.5rem;
  top: 4.2rem;
  width: 9rem;
  background-color: rgba(0,0,0,0);
  border: rgb(250, 163, 32) 0.1rem solid;
  border-radius: 0.6rem;
  outline:none;
}
.hint{
  position: absolute;
  font-style: italic;
  font-size: 0.7rem;
  color:rgb(200, 200, 200);
  width: 100%;
  top: 16rem;
}
</style>