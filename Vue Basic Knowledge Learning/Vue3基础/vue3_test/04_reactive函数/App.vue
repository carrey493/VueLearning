<template>
  <h1>信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作种类：{{ job.type }}</h3>
  <h3>工作薪水：{{ job.salary }}</h3>
  <h3>爱好： {{hobby[1]}}</h3>
  <button @click="changeInfo">修改</button>
  <hr>
  <h4>地址：{{school.address}}</h4>
  <h4>专业：{{school.major}}</h4>
  <h4>教师：{{school.teachers}}</h4>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    //数据
    let name = ref("张三");
    let age = ref(18);
    let job = reactive({
      type: "前端",
      salary: "30k",
      a:{
        b:{
          c:1
        }
      }
    });
    let hobby = reactive(['学习','娱乐'])

    let school = reactive({
      address:'beijing',
      major:'information',
      teachers:['***','###']
    })

    function changeInfo() {
      name.value = "李四";
      age.value = "45";
      job.type = "后端";
      job.salary = "15k";
      hobby[1] = '游戏'
      school.address = 'wuhan'
      school.major = 'ui'
      school.teachers[0] = '$$$'
    }

    return {
      name,
      age,
      job,
      hobby,
      school,
      changeInfo,
    };
  },
};
</script>

<style></style>
