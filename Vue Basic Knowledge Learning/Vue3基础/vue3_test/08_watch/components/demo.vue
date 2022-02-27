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
import { ref, reactive, watch } from "vue";
export default {
  name: "Demo",
  components: {},
  watch: {
    /* sum(newV,oldV){
      console.log('变化了',newV,oldV);
    } */
    /* sum: {
      immediate: true,
      handler(newV, oldV) {
        console.log("变化了", newV, oldV);
      },
    }, */
  },
  setup() {
    //数据
    let sum = ref(0);
    let msg = ref("你好");
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        job1: {
          s: 20,
        },
      },
    });
    //一、监视ref所定义一个的响应式数据
    watch(
      sum,
      (n, o) => {
        console.log("sum变了", n, o);
      },
      { immediate: true }
    );
    //二、监视ref所定义多个的响应式数据
    //返回一个对象（常用）
    watch(
      [sum, msg],
      (n, o) => {
        console.log("sum或msg变了", n, o);
      },
      { immediate: true }
    );
    /* 
    三、监视reactive所定义一个的响应式数据的全部属性,
    注意 1.此处无法正确获得oldValue
         2.强制开启了深度监视 deep配置无效
    */
    watch(person, (n, o) => {
      console.log("person变化了", n, o);
    });
    /* 
    四·监视reactive所定义一个的响应式数据的某个属性,
    */
    watch(
      () => person.age,
      (n, o) => {
        console.log("person的age变化了", n, o);
      }
    );
    /* 
    五·监视reactive所定义多个的响应式数据,
    */
    watch([() => person.name, () => person.age], (n, o) => {
      console.log("name或age变了", n, o);
    });
    /* 六.特殊情况 */
    watch(
      [() => person.job],
      (n, o) => {
        console.log("job改变了", n, o);
      },
      { deep: true } //监视的是reactive元素定义的对象中的某个属性 所以deep配置有效
    );
    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<style></style>
