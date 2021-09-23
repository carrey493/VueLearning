export default {
  install(Vue) {
    console.log(Vue);

    //全局过滤器
    Vue.filter("mySlice", function(value) {
      return value.slice(0, 4);
    });

    //自定义指令
    Vue.directive("fbind", {
      bind(element, binding) {
        element.value = binding.value;
      },
      inserted(element, binding) {
        element.value = binding.value;
      },
      update(element, binding) {
        element.value = binding.value;
      },
    });

    //定义混入
    Vue.mixin ({
      data() {
        return {
          msg: "全局混合",
          x:100
        };
      },
    });

    Vue.prototype.hello = () => {alert('你好啊！')}
  },
};
