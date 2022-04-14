<template>
<HeaderPart/>
  <a-page-header style="border: 1px solid rgb(235, 237, 240)" title="Title" sub-title="This is a subtitle"
    @back="() => null" />

  <nav class='all'>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
import HeaderPart from "@/components/header.vue";
export default {
  name: "HomeView",
  components: {
    HeaderPart,
  },
};

</script>


<style lang="scss">
 // 如果加上scoped就是只对当前模块生效
 @import "./styles/global.scss"; //全局引入在main.js中引; @import 是stylus语法，是在css中引css

 #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: #2c3e50;
 }

 nav {
   padding: 30px;

   a {
     font-weight: bold;
     color: #2c3e50;

     &.router-link-exact-active {
       color: #42b983;
     }
   }
 }
</style>
