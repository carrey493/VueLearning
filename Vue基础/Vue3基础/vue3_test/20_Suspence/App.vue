<template>
  <div class="app">
    <h3>APP组件</h3>
    <Suspense>
      <template v-slot:default>
        <Child />
      </template>
      <template v-slot:fallback>
        <h3>加载中~~~</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
// import Child from "./components/Child.vue";//静态引入
import { defineAsyncComponent } from "vue";
const Child = defineAsyncComponent(() => import("./components/Child.vue")); //异步引入组件
export default {
  name: "App",
  components: { Child },
};
</script>

<style>
.app {
  background-color: skyblue;
  padding: 10px;
}
</style>
