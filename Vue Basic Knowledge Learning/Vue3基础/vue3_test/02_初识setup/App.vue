<template>
  <h1>信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>说话：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <h2>住址：{{ address }}</h2>
  <button @click="sayHello">你好(Vue3)</button><br />
  <button @click="sayWelcome">欢迎(Vue2)</button><br />
  <button @click="test1">测试(在Vue2配置中读取Vue3中的数据与方法)</button><br />
  <button @click="test2">测试(在Vue3配置中读取Vue2中的数据与方法)</button><br />
</template>

<script>
// import {h} from 'vue'
export default {
  name: "App",
  //测试setup,暂不做响应式。
  components: {},
  setup() {
    //数据
    let name = "张三";
    let age = 18;
    let address = 'wuhanhongshan'

    //方法
    function sayHello() {
      alert(`我叫${name},我${age}岁了，你好啊！`);
    }
    function test2() {
      console.log(this.name);
      console.log(this.age);
      console.log(this.sex);
      this.sayHello();
      this.sayWelcome();
      //Vue3中不能读取Vue2中的数据与方法
    }
    return {
      name,
      age,
      address,
      sayHello,
      test2
    };

    /* //返回一个渲染函数
    return ()=> h('h1','学校') */
  },
  data() {
    return {
      sex: "男",
      // address:'wuhan' //同名数据以Vue3为主
    };
  },
  methods: {
    sayWelcome() {
      alert("欢迎学习！");
    },
    test1() {
      console.log(this.name);
      console.log(this.age);
      console.log(this.sex);
      this.sayHello();
      //Vue2中不能读取Vue3中的数据与方法
    },
  },
};
</script>

<style></style>
