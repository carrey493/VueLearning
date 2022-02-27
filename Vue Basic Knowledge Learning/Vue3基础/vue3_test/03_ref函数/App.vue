<template>
  <h1>信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <button @click="changeInfo">修改</button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    //数据
    let name = ref("张三");
    let age = ref(18);
    let job = ref({
      type: "前端",
      salary: "30k",
    });

    function changeInfo() {
      name.value = "李四";
      age.value = "45";
      job.value.type = "后端";
      job.value.salary = "15k";
    }

    return {
      name,
      age,
      job,
      changeInfo,
    };
  },
};
</script>

<style></style>
