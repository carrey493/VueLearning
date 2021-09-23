<template>
  <div>
    <Test />
    <Test2 />
    <Test3 />
  </div>
</template>

<script>
import Test from "./componets/Test.vue";
import Test2 from "./componets/Test2.vue";
import Test3 from "./componets/Test3.vue";
export default {
  name: "App",
  components: { Test, Test2,Test3 },
};
</script>

<style></style>
