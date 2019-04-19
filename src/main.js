import Vue from 'vue'
import App from './App.vue'
import './css/basic.css'
import './js/basic-mobile'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(Mint)
import { Tabbar, TabItem } from 'mint-ui'


import NewsComponent from './components/newsComp.vue'
import VideoComponent from './components/videoComp.vue'
import ShortVideoComponent from './components/shotVideoComp.vue'
import PlayGameComponent from './components/playgameComp.vue'
import MyComponent from './components/myComp.vue'


//创建路由对象
let router = new Router({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: NewsComponent },
        { path: '/video', component: VideoComponent },
        { path: '/small-video', component: ShortVideoComponent },
        { path: '/playGame', component: PlayGameComponent },
        { path: '/my', component: MyComponent },
    ],
    linkActiveClass: 'is-selected'
})

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

Vue.config.productionTip = false

new Vue({
        render: h => h(App),
        router
    }).$mount('#app')
    //.$mount 为手动挂载,