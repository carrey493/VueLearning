<template>
  <div>
    <h1>人员列表</h1>
    <h3>Count组件的求和{{ sum }}</h3>
    <h3>列表中第一个人的名字为--{{ firstPersonName }}</h3>
    <input type="text" name="" id="" placeholder="请输入名字" v-model="name" />
    <button @click="add">添加</button>
    <button @click="addWang">添加一个姓王的人</button>
    <button @click="addPersonServer">添加一个名字随机的人</button>
    <ul>
      <li v-for="p in personList" :key="p.id">
        {{ p.name }}
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "person",
  computed: {
    /* personList(){
          return this.$store.state.personList
      } */
    sum() {
      return this.$store.state.countsOptions.sum;
    },
    personList() {
      return this.$store.state.personsOptions.personList;
    },
    // ...mapState(["personList",'sum']),
    firstPersonName() {
      return this.$store.getters["personsOptions/firstPersonName"];
    },
  },
  data() {
    return {
      name: "Persons",
    };
  },
  methods: {
    add() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.commit("ADD_PERSON", personObj);
      this.$store.commit("personsOptions/ADD_PERSON", personObj);
      this.name = "";
    },
    addWang() {
      const personObj = { id: nanoid(), name: this.name };
      this.$store.dispatch("personsOptions/addPersonWang", personObj);
      this.name = "";
    },
    addPersonServer(){
      this.$store.dispatch("personsOptions/addPersonServer");
      this.name = "";
    }
  },
};
</script>

<style></style>
