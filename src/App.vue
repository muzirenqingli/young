<template>
  <div id="app">
    <!-- 顶部 -->
    <header-comp></header-comp>
    
    <div class="main-content">
    <!-- 中间路由 -->
        <transition name="component-fade">
    <router-view></router-view>
    </transition>
    
    
    <!--路由匹配到的组件被渲染到这里w -->
    </div>
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



export default {
  name: 'app',
  data:function(){
    return {
      selected:'tab1'
    }
  },
  components: {
    HeaderComp
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

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
  left: 0;
  right: 0;
  top: 0rem;
  bottom: 0rem;
  .main-content{
    overflow-x: hidden;
    position: absolute;
    left: 0px;
    right: 0px;
    top: 0.7rem;
    bottom: 0.7rem;
  }
  
}

a.app-roter-active .mint-tab-item-label{
    color: #ec4741
  }

  .component-fade-enter{transform:translateX(100%); opacity:0}
  .component-fade-leave-to{transform:translateX(-100%); opacity:0; position: absolute}
  .component-fade-enter-active{transition:all 0.8s ease;}
  .component-fade-leave-active{transition:all 0.8s ease;}

  .page-content{ position: absolute; overflow-x: hidden }
</style>
