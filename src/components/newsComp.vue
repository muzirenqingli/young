<template>
    <div class="inner-content">
        <header-nav></header-nav>
        
        <div v-touch:swipe.left="swipeLeftHandler" v-touch:swipe.right="swipeRightHandler">
        <transition name="component-fade">
    <router-view :key="newsId"></router-view>
    </transition>
    </div>

        
    </div>
</template>
<script>
import Vue from 'vue'
import HeaderNav from './headerNav.vue'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents)

export default {
    data () {
        return {
            newsId:0
        }
    },
    components:{
        HeaderNav
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