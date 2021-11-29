<template>
  <h1>信息</h1>
  <h2>姓：<input type="text" v-model="person.firstName" /></h2>
  <h2>姓：<input type="text" v-model="person.lastName" /></h2>
  <span>全名：{{ person.fullName }}</span>
  <br />
  全名：<input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from "vue";
export default {
  name: "Demo",
  components: {},
  beforeCreate() {},
  /* computed:{
    fullName(){
      return this.person.firstName + '-' + this.person.lastName
    }
  }, */
  setup() {
    //数据
    let person = reactive({
      firstName: "zhang",
      lastName: "san",
      age: 19,
    });

    //简写属性 没有考虑计算属性被修改
    /* person.fullName =computed(()=>{
      return person.firstName + '-' + person.lastName
    }) */
    //简写属性 考虑读和写
    person.fullName = computed({
      get() {
        return person.firstName + "-" + person.lastName;
      },
      set(value) {
        const nameArr = value.split("-");
        person.firstName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });

    return {
      person,
    };
  },
};
</script>

<style></style>
