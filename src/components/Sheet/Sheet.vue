<template>
  <div class="Sheet">
    <div class='title'>
      学生会监会表
    </div>
    <div class="notice">
      <span>
        notice:
      </span>
      请您将例会上的主要内容填写在下方的例会内容中，例会到场的情况填写在例会未到人员表格中，年/月/日表格中填写例会日期
    </div>
    <div class="Inputs">
      <input type="text" class="inputframe" name="" placeholder="监会姓名" required>
      <input type="text" class="inputframe" name="" placeholder="监会部门" required>
      <input type="text" class="inputframe" name="" placeholder="出勤率：应到/实到" required>
      <input type="text" class="inputframe" name="" placeholder="会议内容：满分5分 [只填写数字]" required>
      <input type="text" class="inputframe" name="" placeholder="会议纪律：满分5分 [只填写数字]" required>
      <input type="text" class="inputframe" name="" placeholder="缺勤姓名 [顿号隔开]" required>
      <textarea class="" rows="8" placeholder="" aria-required="true" required />
      <input type="submit" class="submitbutton" name="" required value="确认提交">
    </div>
  </div>
</template>

<script>
export default {
  name: "Sheet",
  methods: {
    
  },
  mounted(){
    //POST
    /*
    this.$ajax({
      method: 'post',
      url: 'http://localhost:3000/meeting',
      data:{
        code: '1234567',
        username: 'Joyce'
      }
    }).then(response=>{
        alert('post code done');
    }).catch(function(err){
        console.log(err)
    });
    */
  }
}
</script>

<style scoped>
.title{
  margin: 5rem 0rem 0rem 0rem;
  font-family: SimSun;
  font-weight: 900;
  font-size: 2rem;
}
.notice{
  margin: 3rem 2rem 0rem 2rem;
  text-align: left;
  font-size: 0.9rem;
  font-family: NSimSun;
}
.notice span{
  font-weight: 900;
  font-family: Microsoft Yahei;
}
.Sheet{
  position: absolute;
  top: 3rem;
  left: 0rem;
  background-color: rgba(231, 230, 230, 0.514);
  width: 100%;
}
.inputframe{
  padding: 0rem 0rem 0rem 1rem;
  width: 19rem;
  height: 2.5rem;
  border: 0rem;
  margin-top: 1.5rem; 
}
textarea{
  padding: 0rem 0rem 0rem 1rem;
  width: 19rem;
  height: 8rem;
  border: 0rem;
  margin-top: 1.5rem; 
}
.submitbutton{
  width: 20rem;
  height: 2.5rem;;
  margin: 1.5rem 0rem 0rem 0rem;
  background-color: rgb(63, 65, 78);
  border: 0rem;
  color: white;
}
</style>

