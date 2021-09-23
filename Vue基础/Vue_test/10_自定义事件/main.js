//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件
Vue.config.productionTip = false


//创建vm
new Vue({
    el:'#app',
    render: h => h(App),
    /* mounted(){
        setTimeout(()=>{
            this.$destroy()
        },3000)
    } */
})