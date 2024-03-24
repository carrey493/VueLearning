# Vue3 快速上手

学习地址：https://www.bilibili.com/video/BV1Za4y1r7KE

## 1.Vue3 简介

- 2020 年 9 月 18 日，`Vue.js` 发布版 `3.0` 版本，代号: `One Piece`(海贼王)
- 经历了：4800+次提交、40+个 RFC、600+次 PR、300+贡献者
- 官方发版地址：[Release v3.0.0 One Piece·vuejs/core](https://github.com/vuejs/core/releases/tag/v3.0.0)
- 截止 2023 年 10 月，最新的公开版本为：`3.3.4`

![](https://img2024.cnblogs.com/blog/2332774/202401/2332774-20240128213637375-583815485.png)

1. **性能的提升**

- 打包减少`41%`
- 初次渲染快 55%，更新渲染快`133%`
- 内存减少`54%`

2. **源码的升级**

- 使用`Proxy`代替`defineProperty`实现响应式。
- 重写虚拟`DOM`的实现和`Tree-Shaking`。

3. **拥抱 TypeScript**

- `Vue3`可以更好的支持`TypeSCript`

4. **新特性**

- `Composition Api`(组合 API)

  - `setup`
  - `ref`与`reactive`
  - `computed`与`watch`

- 新的内置组件

  - `Fragmwnt`
  - `Teleport`
  - `Suspense`

- 其它改变
  - 新的生命周期钩子
  - `data`选项应始终被声明为一个函数
  - 移除`keycode`支持作为`v-on`的修饰符

## 2.创建 Vue3 工程

1. 基于 vue-cli 创建

> 备注：目前`vue-cli`(webpack)已处于维护模式，官方推荐基于`Vite`创建项目。

```shell
## 查看@vue/cli版本，确保avue/cli版本在4.5.0 以上
vue --version

## 安装或者升级你的@vue/cli
npm install -g @vue/cli

## 执行创建命令
vue create vue test

## 随后选择3.x
## Choose a version of Vue.js that you want to start the project with (Use arrow keys)
## >3.x
## 2.X

## 启动
```

2. 基于 vue-cli 创建

`vite`是新一代前端构建工具，官网地址: https://vitejs.cn，`vite`的优势如下

- 轻量快速的热重载(`HMR`)，能实现极速的服务启动。
- 对`TypeScript`、`JSX`、`Css`等支持开箱即用。
- 真正的按需编译，不再等待整个应用编译完成。
- `webpack` 构建与 `vite` 构建对比图如下

![](https://img2024.cnblogs.com/blog/2332774/202401/2332774-20240128221308207-1337125103.png)

具体操作如下：

```shell
## 1.创建命令
npm create vue@latest

## 2.具体配置
## 配置项目名称
Project name: vue3 test
## 是否添加TypeScript支持
Add TypeScript? Yes
## 是否添加JSX支持
Add JSX Support? No
## 是否添加路由环境
Add Vue Router for Single Page Application development? No
## 是否添加pinia环境
Add Pinia for state management? No
## 是否添加单元测试
Add Vitest for Unit Testing? No
## 是否添加端到端测试方案
Add an End-to-End Testing Solution?  No
## 是否添加ESLint语法检查
Add ESLint for code quality? Yes
## 是否添加Prettiert代码格式化
Add Prettier for code formatting? No
```

**总结**

- `vite` 项目中，`index.html` 是项目的入口文件，在项目最外层
- 加载 `index.html` 后，Vite 解析 `<script type="module" src="xxx">`指向的`JavaScript`。
- `Vue3` 中是通过`createApp`函数创建一个应用实例。

3. 一个简单的效果

```vue
<template>
  <!-- html结构 -->
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script lang="ts">
//js或ts
export default {
  name: "Person", //组件名
  data() {
    return {
      name: "张三",
      age: 18,
      tel: "13256891256",
    };
  },
  methods: {
    showTel() {
      alert(this.tel);
    },
    changeName() {
      this.name = "李四";
    },
    changeAge() {
      this.age = 20;
    },
  },
};
</script>

<style scoped>
/* 样式 */
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}
button {
  margin: 0 5px;
}
</style>
```

## 3.Vue3 核心语法

### 1. OptionsAPI 与 CompositionAPI

- `Vue2`的`API`设计是`Options`（配置）风格的
- `Vue3`的`API`设计是`Composition`（组合）风格的

**OptionsAPI 的弊端**

`Options` 类型的 `API`，
数据、方法、计 算属性等，是分散在: `data` `methods`、`computed` 中的，若想新增或者修改一个需求，就需要分别修改: `data`、`methods`、`computed`不便于维护和复用。

![](https://img2024.cnblogs.com/blog/2332774/202403/2332774-20240324233904079-1512787513.gif)

**CompositionAPI 的优势**

可以用函数的方式，更加优雅的组织代码，让相关功能的代码更加有序的组织在一起。

![](https://img2024.cnblogs.com/blog/2332774/202403/2332774-20240324234621858-124867516.gif)

### 2. 拉开序幕的 setup

**setup 概述**

`setup` 是 `Vue3` 中一个新的配置项，值是一个函数，它是 `Composition API`“表演的舞台”，组件中所用到的:数据、方法、计算属性、监视.....等等，均配置在 setup 中。

特点如下：

- `setup` 函数返回的对象中的内容，可直接在模板中使用。
- `setup` 中访问 this 是 undefined 。
- `setup` 函数会在 beforeCreate 之前调用，它是“领先”所有钩子执行的。
