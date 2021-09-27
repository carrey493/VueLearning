export default {
  namespaced: true,
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
