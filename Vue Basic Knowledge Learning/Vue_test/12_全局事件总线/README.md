## 全局事件总线

### 1.用途

- 一种组件间通信的方式，适用于任意组件通信

### 2.安装

```js
new Vue({
  el: "#app",
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this; //安装全局事件总线
  },
});
```

### 3.使用

#### 1.接收数据

A组件想接收数据，则在A组件中给$bus绑定自定义事件，时间的回调留在A组件自身

```js
mounted() {
    this.$bus.$on('hello',(data)=>{
        console.log('School组件,收到了',data);
    })
},
```

#### 2.提供数据

- this.$bus.$emit('xxx',data)

```js
methods: {
    sendSudentName() {
      this.$bus.$emit('hello',666)
    },
  },
```

### 4.销毁

- 最好在beforeDestory钩子中，用$off去解绑当前组件所用到的时间

```js
beforeDestroy() {
    this.$bus.$off('hello') //销毁之前解绑
},
```

