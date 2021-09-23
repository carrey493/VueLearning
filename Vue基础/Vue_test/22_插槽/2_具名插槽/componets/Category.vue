<template>
  <div class="category">
    <h3>{{ title }} 分类</h3>
    <slot name="first">可以设置默认值当使用者没有传递具体结构时我会出现1</slot>
    <slot name="second">可以设置默认值当使用者没有传递具体结构时我会出现2</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
};
</script>

<style>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background: orange;
}
</style>
