<template>
  <div class="BottomBar">
    <div class="contact">
      <div class="title">
        联系我们
        <img src="../../assets/little-tri.png">
      </div>
      <div class="content">
        办公室公邮
      </div>
      <div class="email">
        eic_hust@qq.com
      </div>
      <div class="content">
        <a href="#">公用房租借</a>
      </div>
      <div class="content">
        <a href="#">招新答疑群</a>
      </div>
      <div class="email">
        833278971
      </div>
      <img src="../../assets/qrcode.png" class="qrcode">
    </div>
    <div class="web">
      <div class="title">
        常用网站
        <img src="../../assets/little-tri.png">
      </div>
      <div class="littletitle">
        <span class="line"></span>
        <span class="text">校园网站</span>
        <span class="line"></span>
      </div>
      <div class="content">
        <a href="https://pass.hust.edu.cn">HUST统一身份认证系统</a>
      </div>
      <div class="content">
        <a href="https://mail.hust.edu.cn">HUST电子邮件系统</a>
      </div>
      <div class="littletitle">
        <span class="line"></span>
        <span class="text">英语教学</span>
        <span class="line"></span>
      </div>
      <div class="content">
        <a href="http://210.42.106.220">高校外语教学平台</a>
      </div>
      <div class="content">
        <a href="https://www.haoce.com">好策读书</a>
      </div>
      <div class="littletitle">
        <span class="line"></span>
        <span class="text">课外学习</span>
        <span class="line"></span>
      </div>
      <div class="content">
        <a href="http://www.w3school.com.cn/">W3school</a>
      </div>
      <div class="content">
        <a href="https://www.liaoxuefeng.com/">廖雪峰官方网站</a>
      </div>
      <div class="content">
        <a href="http://www.runoob.com/">菜鸟教程</a>
      </div>
      <div class="content">
        <a href="http://study.163.com/">网易云课堂</a>
      </div>
      <div class="content">
        <a href="https://www.coursera.org/">Coursera</a>
      </div>
    </div>
    <div class="bottom">
      Copyright © 2018 办公室 | Office of EIC, HUST
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomBar",
}
</script>

<style scoped>
.BottomBar{
  position: absolute;
  height: 26rem;
  width: 100%;
  background-color: rgb(46, 46, 46);
  top: 176.0rem;
  left: 0rem;
}
.contact{
  width: 50%;
  padding: 2rem 0rem 0rem 0rem;
  background-color: rgb(46, 46, 46);
  position: absolute;
  float: left;
  color: white;
}
.contact .title{
  width: 50%;
  padding: 0.5rem 0rem 0rem 1.5rem;
  float: left;
}
.contact .title img{
  width: 0.5rem;
}
.contact .content{
  padding: 0.5rem 2rem 0rem 2rem;
  float: left;
  color: rgb(201, 212, 212);
  font-size: 0.8rem;
  font-family:STZhongsong;
}
.contact .email{
  float: left;
  padding: 0rem 0rem 0rem 3rem;
  color: rgba(0, 255, 255, 0.651);
  font-family:STZhongsong;
  font-size: 0.8rem;
}
.contact a{
  text-decoration:none;
  color: rgb(201, 212, 212);
}
.contact .qrcode{
  position: absolute;
  top: 11rem;
  left: 3rem;
  width: 6rem;
  height: 6rem;
}
.web{
  width: 50%;
  left: 45%;
  padding: 2rem 0rem 0rem 0rem;
  background-color: rgb(46, 46, 46);
  position: absolute;
  float: left;
  color: white;
}
.web .title{
  width: 50%;
  padding: 0.5rem 0rem 0rem 1.5rem;
  float: left;
}
.web img{
  width: 0.5rem;
}
.web .content{
  padding: 0.5rem 0rem 0rem 2rem;
  margin-right: 1rem;
  float: left;
  color: rgb(201, 212, 212);
  font-size: 0.8rem;
  font-family:STZhongsong;
}
.web a{
  text-decoration:none;
  color: rgb(201, 212, 212);
}
.web .littletitle{
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.7rem;
  font-family:STZhongsong;
  padding: 0.5rem 0rem 0rem 2rem;
  margin: 0.5rem 0rem 0rem 0.5rem;
  float: left;
  color:rgba(255, 255, 255, 0.459);
}
.littletitle .line{
  height: 0.05rem;
  width: 2rem;
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.459);
}
.bottom{
  height: 2rem;
  font-family: "Helvetica Neue",Helvetica,Arial,"Microsoft Yahei","Hiragino Sans GB","Heiti SC","WenQuanYi Micro Hei",sans-serif;
  width: 100%;
  padding: 0.8rem 0rem 0.2rem 0rem;
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.233);
  background-color: black;
  text-align: center;
  position: absolute;
  top: 25.9rem;
}
</style>

