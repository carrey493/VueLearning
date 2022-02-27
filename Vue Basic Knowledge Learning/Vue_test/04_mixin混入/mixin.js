export const mixin = {
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
export const mixin2 = {
  data() {
    return {
      x: 100,
      y: 20,
    };
  },
};
export const MixIn = {
    data() {
      return {
        msg:'全局混合'
      };
    },
};
  
