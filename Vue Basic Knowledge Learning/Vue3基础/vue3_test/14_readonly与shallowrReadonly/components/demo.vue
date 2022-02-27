<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.job1.s }}k</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.job1.s++">涨薪</button>
  <h2>当前求和：{{sum}}</h2>
  <button @click="sum++">sum++</button>
</template>

<script>
import { reactive, toRefs, ref,readonly,shallowReadonly } from "vue";
export default {
  name: "Demo",

  setup() {
    //数据
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        job1: {
          s: 20,
        },
      },
    });
    console.log(person);
    // person = readonly(person)
    person = shallowReadonly(person)
    let sum = ref(0)
    sum = readonly(sum)
    return {
      sum,
      ...toRefs(person),
    };
  },
};
</script>

<style></style>
