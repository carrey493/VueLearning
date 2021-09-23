## 插件

- 功能：用于增强Vue
- 本质：包含install方法的一个对象，install第一个参数是Vue,第二个参数以后是插件使用者传递的数据
- 定义插件

```js
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

```