//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
import {MixIn} from './mixin'

Vue.config.productionTip = false
Vue.mixin(MixIn)


//创建vm
new Vue({
    el:'#app',
    render: h => h(App)
})