<template>
  <div class='nav-home'>
    <div class='nav-bar-logo'>
      <img src='../assets/logo-black-web.png' class='nav-bar-logo-img'/>
    </div>
    <div class="nav-bar-menu">
      <img v-show="showMenu" src='../assets/hidden-logo-1.png' @click="changeShowMenu" class='nav-bar-hidden-img-1'/>
      <img v-show="!showMenu" src='../assets/hidden-logo-2.png' @click="changeShowMenu" class='nav-bar-hidden-img-2'/>
      <transition name="slide">
        <ul v-show="showMenu">
          <a href="/#/"><li>首页</li></a>
          <a href="/#/sheet"><li>监会表</li></a>
          <a href="http://47.106.111.48:4567"><li>EIC论坛</li></a>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    changeShowMenu() {
      this.showMenu = !this.showMenu;
    },
    redirect(page) {
      this.$router.push(page);
      this.showMenu = false;
    }
  },
  data: () => {
    return {
      showMenu: false
    }
  }
}
</script>

<style scoped>
.nav-home {
  position:fixed;
  top: 0rem;
  left: 0rem;
  height: 3.1rem;
  width: 100%;
  z-index: 1000;
  background-color: rgb(249,249,249);
}
.nav-bar-logo{
  cursor: pointer;
  float: left;
}
.nav-bar-logo-img{
  margin: 0.4rem 0rem 0rem 2rem;
  width: 4.92rem;
  height: 2.30rem;
}
.nav-bar-hidden-img-2{
  float: right;
  margin: 0.92rem 3.4rem 0rem 0rem;
  width: 1.36rem;
  height: 1.36rem;
}
.nav-bar-hidden-img-1{
  float: right;
  margin: 0.92rem 3.4rem 0rem 0rem;
  width: 1.36rem;
  height:1.59rem;
}
.nav-bar-menu {
  float: right;
}
.nav-bar-menu ul {
  position: absolute;
  margin: 0;
  width: 8rem;
  top:3.1rem;
  right:0rem;
  text-align: center;
  list-style-type: none;
  z-index: 1000;
}
.nav-bar-menu li {
  font-weight: bold;
  font-size: 0.84rem;
  height: 2.5rem;
  line-height: 2.5rem;
  list-style: none;
  background-color: rgb(249,249,249);
}
.nav-bar-menu li:hover {
  background-color: #75c4f1;
  color: #ffffff;
}
a{
  text-decoration:none;
  color: black;
}
.slide-enter-active {
  transform-origin: 50% 0;
  -moz-transform-origin: 50% 0;
  -webkit-transform-origin: 50% 0;
  -o-transform-origin: 50% 0;
  -ms-transform-origin: 50% 0;
  animation: slide-down .2s ease-in;
  -moz-animation: slide-down .2s ease-in;
  -webkit-animation: slide-down .2s ease-in;
  -o-animation: slide-down .2s ease-in;
  -ms-animation: slide-down .2s ease-in;
}
.slide-leave-active {
  transform-origin: 50% 0;
  -moz-transform-origin: 50% 0;
  -webkit-transform-origin: 50% 0;
  -o-transform-origin: 50% 0;
  -ms-transform-origin: 50% 0;
  animation: slide-down .2s ease-out reverse;
  -moz-animation: slide-down .2s ease-out reverse;
  -webkit-animation: slide-down .2s ease-out reverse;
  -o-animation: slide-down .2s ease-out reverse;
  -ms-animation: slide-down .2s ease-out reverse;
}

@keyframes slide-down {
  0% {
    transform: scale(1, 0);
    -moz-transform: scale(1, 0);
    -webkit-transform: scale(1, 0);
    -o-transform: scale(1, 0);
    -ms-transform: scale(1, 0);
  }
  25% {
    transform: scale(1, 0.55);
    -moz-transform: scale(1, 0.55);
    -webkit-transform: scale(1, 0.55);
    -o-transform: scale(1, 0.55);
    -ms-transform: scale(1, 0.55);
  }
  50% {
    transform: scale(1, 0.85);
    -moz-transform: scale(1, 0.85);
    -webkit-transform: scale(1, 0.85);
    -o-transform: scale(1, 0.85);
    -ms-transform: scale(1, 0.85);
  }
  75% {
    transform: scale(1, 0.95);
    -moz-transform: scale(1, 0.95);
    -webkit-transform: scale(1, 0.95);
    -o-transform: scale(1, 0.95);
    -ms-transform: scale(1, 0.95);
  }
  100% {
    transform: scale(1, 1);
    -moz-transform: scale(1, 1);
    -webkit-transform: scale(1, 1);
    -o-transform: scale(1, 1);
    -ms-transform: scale(1, 1);
  }
}

@-moz-keyframes slide-down {
  0% {
    -moz-transform: scale(1, 0);
  }
  25% {
    -moz-transform: scale(1, 0.55);
  }
  50% {
    -moz-transform: scale(1, 0.85);
  }
  75% {
    -moz-transform: scale(1, 0.95);
  }
  100% {
    -moz-transform: scale(1, 1);
  }
}

@-webkit-keyframes slide-down {
  0% {
    -webkit-transform: scale(1, 0);
  }
  25% {
    -webkit-transform: scale(1, 0.55);
  }
  50% {
    -webkit-transform: scale(1, 0.85);
  }
  75% {
    -webkit-transform: scale(1, 0.95);
  }
  100% {
    -webkit-transform: scale(1, 1);
  }
}

@-o-keyframes slide-down {
  0% {
    -o-transform: scale(1, 0);
  }
  25% {
    -o-transform: scale(1, 0.55);
  }
  50% {
    -o-transform: scale(1, 0.85);
  }
  75% {
    -o-transform: scale(1, 0.95);
  }
  100% {
    -o-transform: scale(1, 1);
  }
}

@-ms-keyframes slide-down {
  0% {
    -ms-transform: scale(1, 0);
  }
  25% {
    -ms-transform: scale(1, 0.55);
  }
  50% {
    -ms-transform: scale(1, 0.85);
  }
  75% {
    -ms-transform: scale(1, 0.95);
  }
  100% {
    -ms-transform: scale(1, 1);
  }
}
</style>
