<template>
    <div class="inner-content">
        <div class="header-nav">
    <ul>
        <li v-for="(item,index) in list" :key="item.path">
            <!-- {{item.path}} -->
            <router-link :to="item.path" @click.prevent v-if = "index == 0" exact>
                {{item.name}}
            </router-link>
            <router-link :to="item.path" @click.prevent v-else>
                {{item.name}}
            </router-link>
        </li>
    </ul>
</div>
        
        <div v-touch:swipe.left="swipeLeftHandler" v-touch:swipe.right="swipeRightHandler">
        <transition name="component-fade">
    <router-view :key="newsId"></router-view>
    </transition>
    </div>

        
    </div>
</template>
<script>
import Vue from 'vue'

import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents)

export default {
    data () {
        return {
            newsId:0,
            list:[
                { name:"关注",path:"home/subNews"},
                { name:"头条",path:"home/firster"},
                { name:"推荐",path:"home/tujian"},
                { name:"上海",path:"home/sh"},
                { name:"要闻",path:"home/news"},
                { name:"青年",path:"home/yong"},
                { name:"创新",path:"home/innovation"},
            
            ]
        }
    },
    components:{
    },
    created() {
        console.log(this.newsId+'12')
         this.newsId = 1;
    },
    methods: {
    swipeLeftHandler(){
      console.log('left+++++++++++++');
   if(this.newsId<6){
        this.newsId ++;
        this.goList();
    }
    
    },
    swipeRightHandler(){
      
      if(this.newsId>0){
          this.newsId --;
           this.goList();
      }
    },
    goList(){
        this.$router.push({path:'subNews',query:{newsId: this.newsId}})
    }
  }
}
</script>
<style lang='less' scoped>

</style>