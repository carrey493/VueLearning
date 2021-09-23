<template>
  <div>
    <h2 @click="showName">学校姓名： {{ name }}</h2>
    <h2>学校地址： {{ address }}</h2>
    {{x}}
    {{msg}}
    <hr />
  </div>
</template>

<script>
import { mixin,mixin2 } from "../mixin";
export default {
  name: "School",
  data() {
    return {
      name: "尚硅谷",
      address: "wuhan",
    };
  },
  mixins: [mixin,mixin2],
};
</script>
