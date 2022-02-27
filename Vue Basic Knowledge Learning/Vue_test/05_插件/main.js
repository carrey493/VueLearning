//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
import plugins from './plugins'
Vue.config.productionTip = false

Vue.use(plugins)

//创建vm
new Vue({
    el:'#app',
    render: h => h(App)
})