<template>
  <h2>求和{{ sum }}</h2>
  <button @click="sum++">加一</button>
</template>

<script>
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";
export default {
  name: "Demo",
  //通过配置项的形式使用生命周期钩子
  /* beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
   beforeUpdate() {
    console.log("beforeUpdate");
  },
   updated() {
    console.log("updated");
  },
   beforeUnmount() {
    console.log("beforeUnmount");
  },
   unmounted() {
    console.log("mounted");
  }, */
  setup() {
    console.log('setup');
    //数据
    let sum = ref(0);

    //通过组合式API的形式去生命周期钩子
    onBeforeMount(() => {
      console.log('onBeforeMount');
    })
    onMounted(() => {
      console.log('onMounted');
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    })
    onUpdated(() => {
      console.log('onUpdated');
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    })
    onUnmounted(() => {
      console.log('onUnmounted');
    })

  

    return {
      sum,
    };
  },
};
</script>

<style></style>
