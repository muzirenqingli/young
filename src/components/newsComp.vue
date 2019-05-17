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
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        name="component-fade"
      >
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
      newsId: 0,
      direction: "left",
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
    this.newsId = 0;
    this.$router.push({ path: "subNews", query: { newsId: this.newsId } });
  },
  methods: {
    swipeLeftHandler() {
      console.log("left+++++++++++++");
      this.direction = "left";
      if (this.newsId < 6) {
        this.newsId++;
        this.goList();
      }
    },
    swipeRightHandler() {
      this.direction = "right";
      if (this.newsId > 0) {
        this.newsId--;
        this.goList();
      }
    },
    goList() {
      this.$router.push({ path: "subNews", query: { newsId: this.newsId } });
    },
    beforeEnter: (el) => {
       el.style.transform = "translateX(100%)";
    },
    enter(el, done) {
         el.offsetWidth;
      el.style.transform = "translateX(0)";
      el.style.transition = "all 0.8s ease";
      done();
    },
    // leave(el, done) {
    //   if (this.direction == "left") {
    //     el.style.transform = "translateX(-100%)";
    //     el.style.transition = "all 0.8s ease";
    //   } else {
    //     el.style.transform = "translateX(100%)";
    //     el.style.transition = "all 0.8s ease";
    //   }
    //   done();
    // }
  }
};
</script>
<style lang='less' scoped>
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
</style>