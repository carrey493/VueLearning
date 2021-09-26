export default {
  namespaced: "personsOptions",
  actions: {
    addPersonWang(context, value) {
      if (value.name.indexOf("王") === 0) {
        context.commit("ADD_PERSON", value);
      } else {
        alert("必须添加一个姓王的人！");
      }
    },
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
    firstPersonName(state) {
      return state.personList[0].name;
    },
  },
};
