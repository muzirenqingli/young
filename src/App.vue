<template>
  <div id="app">
    <!-- 顶部 -->
    <header-comp></header-comp>
    <header-nav></header-nav>

    <!-- 中间路由 -->
    <router-view></router-view>
    <!--路由匹配到的组件被渲染到这里w -->

    <!-- 页底 -->
    <mt-tabbar v-model="selected">
     
      <router-link to="/home" class="mint-tab-item">
        <div class="mint-tab-item-icon"></div>
          <div class="mint-tab-item-label">新闻</div>
      </router-link>
      
      <router-link to="/video" class="mint-tab-item">
        <div class="mint-tab-item-icon"></div>
          <div class="mint-tab-item-label">视频</div>
      </router-link>

       <router-link to="/small-video" class="mint-tab-item">
        <div class="mint-tab-item-icon"></div>
          <div class="mint-tab-item-label">小视频</div>
      </router-link>

       <router-link to="/playGame" class="mint-tab-item">
        <div class="mint-tab-item-icon"></div>
          <div class="mint-tab-item-label">广场</div>
      </router-link>

       <router-link to="/my" class="mint-tab-item">
        <div class="mint-tab-item-icon"></div>
          <div class="mint-tab-item-label">我</div>
      </router-link>
      
      
    </mt-tabbar>
  </div>
</template>

<script>


import HeaderComp from './components/headerComp.vue'
import HeaderNav from './components/headerNav.vue'
export default {
  name: 'app',
  data:function(){
    return {
      selected:'tab1'
    }
  },
  components: {
    HeaderComp,
    HeaderNav
  },
  created:function(){
    class Person{
      constructor(name,age){
        this.name = name;
        this.age = age;

      }
      say(){
        return "name:11111111c"+this.name+"age:"+this.age
      }

    }

    let p1 = new Person('liqian','33');
    window.console.log(p1.say())
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 0.70rem;
  
}

a.app-roter-active .mint-tab-item-label{
    color: #ec4741
  }
</style>
