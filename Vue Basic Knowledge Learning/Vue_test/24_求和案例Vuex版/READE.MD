## Vuex

### 1.概念

- 专门在Vue中实现集中式状态（数据）管理的一个Vue插件，对vue应用中多个组件的共享状态进行集中式的管理（读/写），也是一种组件间通信的方式，且适用于任意组件间通信。

### 2.何时用

- 多个组件依赖于同意状态
- 来自不同组件的行为需要变更同一状态

### 3.原理

- ![image-20210923192435431](C:\Users\MECHREVO\AppData\Roaming\Typora\typora-user-images\image-20210923192435431.png)

### 4.搭建环境

- 创建文件 src/store/index.js

```js
//用于创建Vuex中store
//引入Vue
import Vue from "vue";

//引入Vuex
import Vuex from 'vuex'
Vue.use(Vuex)


//准备actions -- 用于响应组件中的动作
const actions = {

}
//准备mutations -- 用于操作数据（state）
const mutations = {

}
//准备state -- 用于存储数据
const state = {

}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state
})

//导出store


```

- 在 main.js 中创建vm时传入store配置项

```js
//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue";
//引入插件
import vueResource from "vue-resource";
//引入store
import store from './store/index'

Vue.config.productionTip = false;
Vue.use(vueResource);

//创建vm
new Vue({
  el: "#app",
  render: (h) => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
});

```

### 5.基本使用

- 基本使用

```js
//用于创建Vuex中store
//引入Vue
import Vue from "vue";

//引入Vuex
import Vuex from "vuex";
Vue.use(Vuex);

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
    addOdd(context,value){
        console.log('actions中addOdd被调用',context,value);
        if(context.state.sum % 2){
            context.commit('ADD',value)
        }
        context.dispatch('demo1',value)
    },
    /* demo1(context,value){
        context.dispatch('demo2',value)
    },
    demo2(context,value){
        context.dispatch('addOdd',value)
    }, */
    addWait(context,value){
        console.log('actions中addWait被调用',context,value);
        setTimeout(()=>{
            context.commit('ADD',value)
        },500)
    }

};
//准备mutations -- 用于操作数据（state）
const mutations = {
    ADD(state,value){
        console.log('mutations中的ADD被调用了',state,value);
        state.sum += value
    },
    REDUCE(state,value){
        console.log('mutations中REDUCE的被调用了',state,value);
        state.sum -= value
    }
};
//准备state -- 用于存储数据
const state = {
  sum: 0,
};

//创建并暴露store
export default new Vuex.Store({
  actions,
  mutations,
  state,
});

//导出store

```

- 组件中读取vuex中的数据：$store.state.sum
- 组件中修改vue中的数据：$store.dispatch('action中的方法名',数据) 或$store.commit('mutations中的方法明',数据)
- 备注：若没有网络请求或其它业务逻辑，组件中也可以越过actions，即不写dispatch,直接写commit

### 6.getters的使用

- 概念：当state中的数据需要经过加工后再使用时，可以使用getters加工
- 在store.js中追加getters配置

```js
const getters = {
    bigSum(state){
        return state.sum*10
    }
}
```

- 组件中读取数据：$store.getters.bigSum

### 7.四个map方法的使用

- mapState方法：用于帮助我们映射status中的数据为计算属性

```js
//借助mapState生成计算属性,从state中读取数据（对象写法）
/* ...mapState({sum:'sum',school:'school',subject:'subject'}), */

//借助mapState生成计算属性,从state中读取数据（数组写法）
...mapState(['sum','school','subject']),
```

- mapGetters方法：用于帮助我们映射getters中的数据为计算属性

```js
//借助mapGetters,从getters中读取数据（对象写法）
/* ...mapGetters({bigSum:'bigSum'}) */
//借助mapGetters,从getters中读取数据（数组写法）
...mapGetters(['bigSum']),
```

- mapActions方法：用于帮助我们生成与actions对话的方法，即：包含$store.dispatch(xxx)的函数

```js
//借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(对象的写法)
...mapMutations({ increment: "ADD", decrement: "REDUCE" }),
//借助mapMutations生成对应的方法，方法中会调用commit去联系mutations(数组的写法)
// ...mapMutations(["ADD","REDUCE"] ),
```

- mapMutations方法：用于帮助我们生成与mutations对话的方法，即：包含$store.commit(xxx)的函数

```js
//借助mapActions生成对应的方法，方法中会调用dispatch去联系mutations(对象的写法)
...mapActions({incrementOdd:'addOdd',incrementWait:'addWait'})
//借助mapActions生成对应的方法，方法中会调用dispatch去联系mutations(数组的写法)
// ...mapActions(['addOdd','addWait'])
```

### 8.模块化+命名空间

- 目的：让代码更好维护，让多种数据分类更加明确
- 修改STORE.JS

```js
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
```

- 开启命名空间后，组件中读取state数据
  - this.$store.state.namespaced.list
  - ...mapState('namespaced',['sum','school','subject'])

- 开启命名空间后，组件中读取getters数据
  - this$store.getters.bigSum
  - ...mapGetters("countsOptions", ["bigSums"]),
- 开启命名空间后，组件中调用dispatch
  - this.$store.dispatch("addOdd", this.n);
  - this.$store.dispatch("personsOptions/addPersonServer");
- 开启命名空间后，组件中调用commit
  - this.$store.commit('REDUCE',this.n)
  - this.$store.commit("personsOptions/ADD_PERSON", personObj);

![image-20210926211613194](C:\Users\MECHREVO\AppData\Roaming\Typora\typora-user-images\image-20210926211613194.png)