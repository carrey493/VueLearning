<template>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>薪资：{{ job.job1.s }}k</h2>
  <h2 v-show="person.car">汽车{{ person.car }}</h2>
  <button @click="name += '~'">修改姓名</button>
  <button @click="age++">修改年龄</button>
  <button @click="job.job1.s++">涨薪</button>
  <h2>当前求和：{{ sum }}</h2>
  <button @click="sum++">sum++</button>
  <button @click="showRaw">输出原始数据</button>
  <button @click="addCar">给人添加一个车</button>
  <button @click="person.car.name+='~'">换车名</button>
  <button @click="person.car.price++">换价格</button>
  <button @click="changePrice">修改价格</button>
</template>

<script>
import { reactive, toRefs, ref, toRaw, markRaw } from "vue";
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
    let sum = ref(0);

    //只能处理响应式对象数据
    function showRaw() {
      const p = toRaw(person);
      p.age++;
      console.log(p);
    }

    function addCar() {
      let car = { name: "Benchi", price: 40 };
      person.car = markRaw(car) ;
    }

    function changePrice(){
      person.car.price++
      console.log(person.car.price);
    }

    return {
      sum,
      person,
      ...toRefs(person),
      showRaw,
      addCar,
      changePrice
    };
  },
};
</script>

<style></style>
