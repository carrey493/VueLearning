<template>
  <div class="app">
    <h3>我是APP组件</h3>
  </div>
</template>

<script>
import {
  reactive,
  toRefs,
  ref,
  readonly,
  isReactive,
  isReadonly,
  isRef,
  isProxy,
} from "vue";
export default {
  name: "App",

  setup() {
    let car = reactive({
      name: "BC",
      price: "40",
    });
    let sum = ref(0);
    let car2 = readonly(car);

    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isProxy(car));
    console.log(isProxy(car2));

    return { ...toRefs(car), sum, car2 };
  },
};
</script>

<style>
.app {
  background-color: skyblue;
  padding: 10px;
}
</style>
