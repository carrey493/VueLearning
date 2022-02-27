<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
</template>

<script>
import { customRef } from "@vue/reactivity";
export default {
  name: "App",
  setup() {
    //自定义一个ref--名为：myRef
    function myRef(value,delay) {
      let timer;
      return customRef((track, trigger) => {
        return {
          get() {
            track(); ///通知vue追踪数据的改变
            return value;
          },
          set(newValue) {
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger(); //通知vue去重新解析模板
            }, delay);
          },
        };
      });
    }

    // let keyWord = ref("hello");//使用vue提供的ref
    let keyWord = myRef("hello",500); //使用程序员提供的ref

    return { keyWord };
  },
};
</script>

<style></style>
