<template>
  <h2>求和{{ sum }}</h2>
  <button @click="sum++">加一</button>
  <br />
  <h2>当前的信息为：{{ msg }}</h2>
  <button @click="msg += '!'">修改</button>
  <hr />
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h2>薪资：{{ person.job.job1.s }}k</h2>
  <button @click="person.name += '~'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.job1.s++">涨薪</button>
</template>

<script>
import { ref, watch } from "vue";
export default {
  name: "Demo",

  setup() {
    //数据
    let sum = ref(0);
    let msg = ref("你好");
    let person = ref({
      name: "张三",
      age: 18,
      job: {
        job1: {
          s: 20,
        },
      },
    });

    console.log(sum);
    console.log(msg);
    console.log(person);
    
    watch(sum,(n,o)=>{
      console.log('sum的值变化了',n,o);
    })

    /* watch(person.value,(n,o)=>{
      console.log('person的值变化了',n,o);
    }) */

    watch(person,(n,o)=>{
      console.log('person的值变化了',n,o);
    },{deep:true})
    
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style></style>
