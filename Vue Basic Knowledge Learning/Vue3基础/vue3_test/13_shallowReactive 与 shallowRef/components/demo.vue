<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.job1.s }}k</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.job1.s++">涨薪</button>
  <h2>{{x.y}}</h2>
  <button @click="x.y++">x++</button>
</template>

<script>
import { reactive, toRefs, shallowReactive, shallowRef } from "vue";
export default {
  name: "Demo",

  setup() {
    //数据
    let person1 = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        job1: {
          s: 20,
        },
      },
    });
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
    let x = shallowRef({y:0})
    return {
      person,
      person1,
      x,
      ...toRefs(person),
    };
  },
};
</script>

<style></style>
