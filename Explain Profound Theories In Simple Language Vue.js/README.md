# 深入浅出Vue.js

`刘博文@著`

## 内容摘要

本书从源码层面分析了Vue.js。首先，简要介绍了Vue.js;接着详细讲解了其内部核心技术“变化侦测”，并带领大家从0到1实现一个简单的“变化侦测系统”；然后详细的介绍了虚拟DOM技术，其中包括虚拟DOM的原理及其patching算法；再后详细讨论了模板编译技术，其中包括模板解析器的实现原理、优化器的原理以及代码生成器的原理；最后详细介绍了其整体架构以及提供给我们使用的各种API的内部原理，同时还介绍了生命周期、错误处理、指令系统与模板过滤器等功能的原理。

#### 第1章 Vue.js简介

**Vue.js提供了声明式操作DOM的能力来解决应用程序变复杂时操作DOM写需求的问题**

##### 1.1	什么是Vue.js

**Vue.js，通常简称为Vue，是一款友好、多用途且性能高的JavaScript框架，能够帮助我们创建可维护性的可测试性更强的代码。**

- Vue.js是一款渐进式的Javascript框架
- Vue.js允许你将一个网页分割成可复用的组件
- Vue.js提供了一个命令行工具，它让快速初始化一个真实的项目工程变得非常简单
- 可以使用Vue.js的单文件组件，可以使项目架构变得非常清晰，可维护

##### 1.2	Vue.js简介

- 2013.7.28尤雨溪在Github上第一次提交
- 2013.12.7新版本 0.6.0 v-指令
- 2014.2.1首次公开发布
- 2015.10.26发布1.0.0版本 **The fate of destruction id also the joy of rebirth 毁灭的命运，也是重生的喜悦** Evangelion
- 2016.10.1发布Vue.js2.0 **Your effortc to remain what you are is what limits you 保持本色的努力，也在限制你的发展** 
- 加入一些官方的辅助工具：路由(Router)、状态管理方案(Vuex)、构建工具(vue-cli)

**Vue.js始终维持着一个理念：这个框架应该是渐进式的  The Progressive Framework**

框架分层：由内之外，Vue.js有足够的灵活性来适应不同的需求，根据自己的需求选择不同的层级

- 视图层渲染
- 组件机制
- 路由机制
- 状态管理
- 构建工具

**Vue.js已是一名前端工程师必备的技能** 

### 第一篇 变化侦测

**Vue.js最独特的特性之一看起来并不显眼的响应式系统**

- 从状态生成DOM，再输出到用户界面显示的一整套流程叫作渲染，应用在运行时会不断地重新渲染
- 而响应式系统赋予框架重新渲染的能力，其重要组成部分是变化侦测
- 变化侦测是响应式系统的核心，没有它，就没有重新渲染，视图也就无法随着状态的变化而变化

`变化侦测`--侦测数据变化--数据变化通知---`视图更新`

#### 第2章 Object变化侦测

**Object和Arrary的变化侦测采用不同的方式处理**

##### 2.1什么是变化侦测

- Vue.js会自动通过状态生成DOM，并将其输出到页面上显示出来，这个过程叫渲染。
- Vue.js的渲染过程是声明式的，我们通过模板来描述状态与DOM之间的映射关系。

**通常，在运行时应用内部的状态会不断发生变化，此时需要不停的重新渲染，变化侦测就是用来解决`如何确定状态中发生了什么变化`这个问题的。**

两种类型
- 推(Vue)：当状态发生变化时，Vue.js立刻就知道了，而且在一定程度上知道哪些状态变了，因此知道的信息更多，也就可以更细粒度的更新。
- 拉(Angular/React)：当状态发生变化时，发送一个信号给框架，框架收到信号后，会进行暴力比对来找出哪些节点需要重新渲染。(A:脏检查;R:虚拟DOM)

更细粒度：假如有一个状态绑定着好多个依赖，每一个依赖表示一个具体的DOM节点，当这个状态发生变化时，向这个状态的所有依赖发送通知，让他们进行DOM更新操作。

- Vue.js2.0开始引入了虚拟DOM，将粒度调整为中等粒度。
- 即一个状态所绑定的依赖不再是具体的DOM节点，而是一个组件。
- 状态变化后，会通知到组件，组件内部再使用虚拟DOM进行对比，可以大大降低依赖数量，降低追踪依赖所消耗的内寸。

**Vue.js之所以能随意调整粒度，本质上还要归功于变化侦测，'推'类型的变化侦测可以随意调整粒度。**

##### 2.2如何追踪变化

在JavaScrupt中有两种方法可以侦测到变化
- Object.defineProperty
- ES6 Proxy

Vue2使用`Object.defineProperty` Vue3使用`ES6 Proxy`

利用Object.defineProperty可以侦测到对象的变化
```js
function defineReactive(data, key, val) {
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      return val;
    },
    set: function (newVal) {
      if (val === newVal) {
        return;
      }
      val = newVal;
    },
  });
}
```
函数`defineReactive`用来对`Object.defineProperty`进行封装，其作用是定义一个响应式数据，在这个函数中进行变化追踪。

封装之后，
每当从data的key中`读取`数据时，`get`函数触发
每当往data的key中`设置`数据时，`set`函数被触发

##### 2.3如何收集依赖

真正有用的是收集依赖：我们观察数据，其目的是当数据的属性发生变化时，可以通知那些使用了该数据的地方。

如何收集依赖？

```html
<template>
  <h1>{{name}}</h1>
</template>
```
在Vue.js2.0中，模板使用数据等同于组件使用数据，所以当数据发生变化时，会将通知发送到组件，然后组件内部再通过虚拟DOM重新渲染。

先收集依赖，即把用到数据的地方收集起来，然后等属性发生变化时，把之前收集好的依赖循环触发一遍就好了。

`总结`：**在getter中收集依赖，在setter中触发依赖。**

##### 2.4依赖收集在哪里

我们已经有了明确的目标：就是在getter中收集依赖，要把依赖收集在哪里呢？
- 首先想到的是每个key都有一个数组，用来存储当前key的依赖。
- 假设以来是一个函数，保存在window.target,现在把defineReactive改造一下

```js
function defineReactive(data, key, val) {
  let dep = []; //新增
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      dep.push(window.target); //新增
      return val;
    },
    set: function (newVal) {
      if (val === newVal) {
        return;
      }
      //新增
      for (let i = 0; i < dep.length; i++) {
        dep[i](newVal, val);
      }
      val = newVal;
    },
  });
}
```

- 这里我们新增了数组dep,用来存储被收集的依赖
- 在set被触发时，循环dep以触发收集到的依赖

**在这里把依赖收集的代码封装成一个Dep类，帮助我们管理依赖，使用这个依赖我们可以收集依赖、删除依赖或者向依赖发送通知等。**

代码如下
```js
export default class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }

  removeSub(sub) {
    remove(this.subs, sub);
  }

  depend() {
    if (window.target) {
      this.addSub(window.target);
    }
  }

  notify() {
    const subs = this.subs.slice();
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}

function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

// 之后再改造一下defineReactive
function defineReactive(data, key, val) {
  let dep = new Dep(); //修改
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      dep.depend(); //修改
      return val;
    },
    set: function (newVal) {
      if (val === newVal) {
        return;
      }
      val = newVal;
      dep.notify(); //新增
    },
  });
}
```
这也顺便回答了上面的问题，依赖收集到哪？---收集到`Dep`中。

##### 2.5依赖是谁

在上面的代码中，我们收集的依赖是`window.target`---它到底是什么？我们到底要收集谁？

收集谁？------>**当属性发生变化后，通知谁？**

- 我们要通知用到数据的地方，而使用这个地方的数据很多，而且类型都不一样
- 这时我们要抽象出一个能集中处理这些情况的类，然后我们在依赖收集阶段只收集这个封装好的类的实例进来，通知也只通知它一个
- 接着，它再负责通知其它地方。

因此，我们给这个抽象的东西起一个名字`watcher`