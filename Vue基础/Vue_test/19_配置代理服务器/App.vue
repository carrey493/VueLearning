<template>
  <div>
    <button @click="getStus">获取学生信息</button>
    <button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStus() {
      axios.get("http://localhost:8083/atguigu/students").then(
        (res) => {
          console.log("请求成功");
          console.log(res);
        },
        (err) => {
          console.log("请求失败" + err);
        }
      );
    },
    getCars() {
      axios.get("http://localhost:8083/demo/cars").then(
        (res) => {
          console.log("请求成功");
          console.log(res);
        },
        (err) => {
          console.log("请求失败" + err);
        }
      );
    },
  },
};
</script>

<style></style>
