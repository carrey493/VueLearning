//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue";
//引入插件
Vue.config.productionTip = false;
import vueResource from "vue-resource";
Vue.use(vueResource);

//创建vm
new Vue({
  el: "#app",
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
});
