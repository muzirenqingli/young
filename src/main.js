import Vue from 'vue'
import App from './App.vue'
import './css/basic.css'
import './js/basic-mobile'

Vue.config.productionTip = false

new Vue({
        render: h => h(App),
    }).$mount('#app')
    //.$mount 为手动挂载,