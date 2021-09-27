//用于创建Vuex中store
//引入Vue
import Vue from "vue";
// import count from './count'
// import person from './person'
import axios from 'axios'

//引入Vuex
import Vuex from "vuex";
import { nanoid } from "nanoid";
Vue.use(Vuex);

//求和功能相关的配置
const countOptions = {
  actions: {
    addOdd(context, value) {
      console.log("actions中addOdd被调用", context, value);
      if (context.state.sum % 2) {
        context.commit("ADD", value);
      }
    },
    addWait(context, value) {
      console.log("actions中addWait被调用", context, value);
      setTimeout(() => {
        context.commit("ADD", value);
      }, 500);
    },
  },
  mutations: {
    ADD(state, value) {
      console.log("mutations中的ADD被调用了", state, value);
      state.sum += value;
    },
    REDUCE(state, value) {
      console.log("mutations中REDUCE的被调用了", state, value);
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    school: "尚硅谷",
    subject: "前端",
  },
  getters: {
    bigsSum(state) {
      return state.sum * 10;
    },
  },
};
const countsOptions = {
  namespaced:true,
  actions: {
    addOdd(context, value) {
      console.log("actions中addOdd被调用", context, value);
      if (context.state.sum % 2) {
        context.commit("ADD", value);
      }
    },
    addWait(context, value) {
      console.log("actions中addWait被调用", context, value);
      setTimeout(() => {
        context.commit("ADD", value);
      }, 500);
    },
  },
  mutations: {
    ADD(state, value) {
      console.log("mutations中的ADD被调用了", state, value);
      state.sum += value;
    },
    REDUCE(state, value) {
      console.log("mutations中REDUCE的被调用了", state, value);
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
    school: "尚硅谷",
    subject: "前端",
  },
  getters: {
    bigSums(state) {
      return state.sum * 10;
    },
  },
};

//人员管理功能相关的配置
const personOptions = {
  actions: {},
  mutations: {
    ADD_PERSON(state, value) {
        console.log("mutations中ADD_PERSON的被调用了");
        state.personList.unshift(value);
      },
  },
  state: {
    personList: [{ id: "001", name: "张三" }],
  },
  getters: {},
};
const personsOptions = {
  namespaced:'personsOptions',
  actions: {
    addPersonWang(context,value){
      if(value.name.indexOf('王') === 0){
        context.commit('ADD_PERSON',value)
      } else{
        alert('必须添加一个姓王的人！')
      }
    },
    addPersonServer(context){
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        response => {
          context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
        },
        error => {
          alert(error.message)
        }
      )
    }
  },
  mutations: {
    ADD_PERSON(state, value) {
        console.log("mutations中ADD_PERSON的被调用了");
        state.personList.unshift(value);
      },
  },
  state: {
    personList: [{ id: "001", name: "张三" }],
  },
  getters: {
    firstPersonName(state){
      return state.personList[0].name
    }
  },
};

//准备actions -- 用于响应组件中的动作
const actions = {
  //无业务逻辑可删除可直接调用commit
  /* add(context,value){
        console.log('actions中add被调用',context,value);
        context.commit('ADD',value)
    },
    reduce(context,value){
        console.log('reduce',context,value);
        context.commit('REDUCE',value)
    }, */
  addOdd(context, value) {
    console.log("actions中addOdd被调用", context, value);
    if (context.state.sum % 2) {
      context.commit("ADD", value);
    }
    // context.dispatch('demo1',value)
  },
  /* demo1(context,value){
        context.dispatch('demo2',value)
    },
    demo2(context,value){
        context.dispatch('addOdd',value)
    }, */
  addWait(context, value) {
    console.log("actions中addWait被调用", context, value);
    setTimeout(() => {
      context.commit("ADD", value);
    }, 500);
  },
};
//准备mutations -- 用于操作数据（state）
const mutations = {
  ADD(state, value) {
    console.log("mutations中的ADD被调用了", state, value);
    state.sum += value;
  },
  REDUCE(state, value) {
    console.log("mutations中REDUCE的被调用了", state, value);
    state.sum -= value;
  },
  ADD_PERSON(state, value) {
    console.log("mutations中ADD_PERSON的被调用了");
    state.personList.unshift(value);
  },
};
//准备state -- 用于存储数据
const state = {
  sum: 0,
  school: "尚硅谷",
  subject: "前端",
  personList: [{ id: "001", name: "张三" }],
};

//准备getters -- 用于将state中的数据进行加工
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};

//创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getters,
  modules:{
      countOptions,
      personOptions,
      countsOptions,
      personsOptions
  }
});

//导出store
