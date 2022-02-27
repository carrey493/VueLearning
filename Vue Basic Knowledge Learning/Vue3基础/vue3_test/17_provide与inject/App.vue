<template>
  <div class="app">
    <h3>祖组件（祖）{{ name }}--{{ price }}</h3>
    <Child />
  </div>
</template>

<script>
import { reactive, toRefs, provide } from "vue";
import Child from "./components/Child.vue";
export default {
  name: "App",
  components: { Child },
  setup() {
    let car = reactive({
      name: "BC",
      price: "40",
    });
    provide("car", car);//给自己的后代组件传递数据

    return { ...toRefs(car) };
  },
};
</script>

<style>
.app {
  background-color: skyblue;
  padding: 10px;
}
</style>
