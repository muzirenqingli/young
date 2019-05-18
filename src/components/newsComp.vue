<template>
  <div class="inner-content">
    <div class="header-nav">
      <ul>
        <li v-for="(item,index) in list" :key="item.path">
          <!-- {{item.path}} -->
          <router-link
            :to="item.path"
            @click.prevent
            v-if="index == 0"
            active-class="menu-active"
          >{{item.name}}</router-link>
          <router-link
            :to="item.path"
            @click.prevent
            v-else
            active-class="menu-active"
          >{{item.name}}</router-link>
        </li>
      </ul>
    </div>

    <div v-touch:swipe.left="swipeLeftHandler" v-touch:swipe.right="swipeRightHandler">
      <transition :name="direction">
        <router-view :key="newsId"></router-view>
      </transition>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

import Vue2TouchEvents from "vue2-touch-events";

Vue.use(Vue2TouchEvents);

export default {
  data() {
    return {
      newsId: 1,
      direction: "left-move",
      list: [
        { name: "关注", path: "subNews?newsId=1" },
        { name: "头条", path: "subNews?newsId=2" },
        { name: "推荐", path: "subNews?newsId=3" },
        { name: "上海", path: "subNews?newsId=4" },
        { name: "要闻", path: "subNews?newsId=5" },
        { name: "青年", path: "subNews?newsId=6" },
        { name: "创新", path: "subNews?newsId=7" }
      ]
    };
  },
  components: {},
  created() {
    this.newsId = 1;
    this.$router.push({ path: "subNews", query: { newsId: this.newsId } });
  },
  methods: {
    swipeLeftHandler() {
      console.log("left+++++++++++++");
      this.direction = "left-move";
      if (this.newsId < 6) {
        this.newsId++;
        this.goList();
      }
    },
    swipeRightHandler() {
      this.direction = "right-move";
      if (this.newsId > 1) {
        this.newsId--;
        this.goList();
      }
    },
    goList() {
      this.$router.push({ path: "subNews", query: { newsId: this.newsId } });
    }
   
  }
};
</script>
<style lang='less' scoped>
.router-link-exact-active{ color: red}
.header-nav {
  position: fixed;
  width: 100%;
  overflow-x: auto;
  font-size: 0.28rem;
  padding: 0.1rem 0rem;
  background: #fff;
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    width: 115%;
    display: flex;
    overflow-y: none;
  }

  ul li {
    margin: 0 0.18rem;
    a {
      font-size: 0.28rem;
    }
  }
}
.left-move-enter{transform:translateX(100%); -webkit-transform: translateX(100%); opacity:0 ;position: absolute}
.left-move-leave-to{transform:translateX(-100%);-webkit-transform: translateX(-100%); opacity:0; position: absolute}

.right-move-leave{transform:translateX(0);-webkit-transform: translateX(0); opacity:0 ;position: absolute}
.right-move-leave-to{transform:translateX(100%);-webkit-transform: translateX(100%); opacity:0 ;position: absolute}
  
  .right-move-enter{transform:translateX(-100%);-webkit-transform: translateX(-100%); opacity:0; position: absolute}
  .left-move-enter-active,.right-move-enter-active{transition:all 0.8s linear; -webkit-transition:all 0.8s linear;}
  .left-move-leave-active,.right-move-leave-active{transition:all 0.8s linear;-webkit-transition:all 0.8s linear;}
</style>