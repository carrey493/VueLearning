<template>
  <!-- html结构 -->
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
//js或ts
export default {
  name: "Person", //组件名
  setup() {
    // setup中的this为uufined

    // 数据
    let name = "张三"; // 此时的数据不是相应时
    let age = 18; // 此时的数据不是相应时
    let tel = 132589; // 此时的数据不是相应时

    // 方法
    function changeName() {
      name = "zhang-san"; // 这样修改是无效的
    }
    function changeAge() {
      age += 1; // 这样修改是无效的
    }
    function showTel() {
      alert(tel);
    }

    return { name, age, tel, changeName, changeAge, showTel };
  },
};
</script>

<style scoped>
/* 样式 */
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
</style>
