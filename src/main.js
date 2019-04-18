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

//创建路由对象
let router = new Router({
    routes: [],
    linkActiveClass: 'app-roter-active'
})

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

Vue.config.productionTip = false

new Vue({
        render: h => h(App),
        router
    }).$mount('#app')
    //.$mount 为手动挂载,