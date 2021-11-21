# bo-vuecurriculum
## vue-examples
## 00.Project setup
```
npm install
```

### 1.Compiles and hot-reloads for development
```
npm run serve
```

### 2.Compiles and minifies for production
```
npm run build
```

### 3.Lints and fixes files
```
npm run lint
```

### 4.Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 01.vue-project

## 02.git&vue

## 03.Frontend

## 04.Vue+Structure

## 05.Vue+Components

### 1.Components Basics

- 组件(Component)，是Vue.js最强大的功能之一。组件可以扩展 HTML元素,封装可重用的代码
- ·在较高层面,组件是自定义元素，Vue.js 的编译器为它添加特殊功能
- 所有Vue组件同时也是Vue的实例(类Vue创建出的对象)，并提供相同的生命周期回调方法
- 项目结构中,components与views的区别
  - components，业务逻辑无关的封装可复用的组件，例如全局警告框等. 
  - Views,具体的视图组件

### 2.全局注册

![image-20210830224444523](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210830224444523.png)

![image-20210830224552004](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210830224552004.png)

### 3.组件结构

![image-20210830224829634](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210830224829634.png)

![image-20210830225326083](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210830225326083.png)

### 4.Local Registration

![image-20210830225613184](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210830225613184.png)

- 原单页面开发中，将所有组件统一编译打包，在用户首次请求时全部响应给客户端。由于将用户当前还无需使用的代码全部返回，致使首屏加载显示过慢
- 延迟加载组件。声明为延迟加载组件，在编译时将编译为独立的文件，在组件真正渲染时，下载相应组件文件渲染,可极大的增加互交体验

![image-20210830232547287](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210830232547287.png)

![image-20210830232637869](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210830232637869.png)

### 5.Router

- 基于Vue实现组合组件,组成应用
- 基于vue-router实现SPA应用
- 即，由vue-router在同一html页面切换显示不同的组件，实现单页面应用
- 即，由vue-router实现当请求地址改变时，将什么组件渲染到什么地方
- Vue工程中,默认的路由文件,src/index.js
- 可用@，代表src。结合path Intellisense插件实现自动提示

![image-20210830234611640](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210830234611640.png)

- <router-link>，在具有路由功能的应用中(点击)导航。通过to属性指定目标地址，默认渲染成<a>标签
- 可以通过配置tag属性生成别的标签,例如li

![image-20210830234738637](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210830234738637.png)

- <router-view>，渲染路径匹配到的视图组件
- 支持内嵌<router-view>，根据嵌套路径,渲染嵌套组件

![image-20210830234842958](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210830234842958.png)

## 06.Data&Computed

### 1.data Must Be a Function

- 需要将,MVVM中的视图内容,绑定VM中的数据
- 当一个Vue实例被创建时，data()方法返回值中声明的属性，自动为vue响应式属性
- 即，当这些属性的值发生改变时,视图将会产生“响应”，自动更新组件模板中的值
- vue组件中的data()，必须是一个函数
- 只有在data() return中预定义的属性才支持响应式更新;因此即使当前不使用，而以后使用的属性,也必须提前定义，但可先置空引用null

### 2.Template Syntax

- Vue使用基于HTML的模板语法,声明式地将DOM绑定至Vue实例的数据
- Vue模板语法基于HTML
- 在底层的实现上，Vue将模板编译成虚拟DOM渲染函数。结合响应系统智能地计算出最少需要重新渲染的组件，把 DOM操作次数减到最少
- 支持基于JSX语法的直接渲染(render)函数

### 3.Text

- 数据绑定使用“Mustache”语法(双大括号)的文本插值。标签将会被替代为绑定值,当绑定数据发生改变,插值处的内容自动更新

![image-20210902000820907](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210902000820907.png)

![image-20210902002056979](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210902002056979.png)

![image-20210902002302509](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210902002302509.png)

![image-20210902002311269](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210902002311269.png)

### 4.Using JavaScript Expressions

- 对于所有的数据绑定，Vue提供了完全的JavaScript表达式支持，表达式会作为JavaScript解析

![image-20210902002531457](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210902002531457.png)

### 5.Computed Properties

- 模板内的表达式虽然便利，但在模板放入太多的逻辑会让模板过重且难以维护
- 模板应提供简单的声明式逻辑

![image-20210902002842804](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210902002842804.png)

- 因此,对于复杂的逻辑,应当使用计算属性。声明的是属性,而非方法

![image-20210902004912753](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210902004912753.png)

![image-20210902004924694](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210902004924694.png)

## 07.Computer + Return + A+Function

![image-20210905143533298](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210905143533298.png)

* ·计算属性是属性，无法传递参数变量。但JS中，属性的值可以是一个函数

![image-20210905143545001](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210905143545001.png)

- data中的属性必须提前声明。data中的响应式属性数据，在组件创建时确定，数据可更改，属性不能添加/更改
- user.address属性,必须提前声明

![image-20210905143728780](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210905143728780.png)

## 08.Lifecycle+Hooks

### 1.lnstance Lifecycle Hooks

- 每个Vue实例在被创建时,都要经过一系列的初始化过程
- 例如,需要设置数据监听、编译模板、将实例挂载到DOM并在数据变化时更新DOM等等
- 当组件生命周期变化时,触发生命周期回调函数

![image-20210905144334928](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210905144334928.png)

![image-20210905144606304](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210905144606304.png)

- 在默认不保存组件实例的情况下路由切换z个组件的生命周期变化过程

![image-20210905145414287](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210905145414287.png)

## 09.Router+Parameter&Resable+Components

### 1.Router Passing Parameter

- 基于RESTful的参数传递
- 在路由配置文件中,使用:param，声明参数变量(类似SpringMVC,{Daraml)

![image-20210905145810116](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210905145810116.png)

- 可通过，$route.params，获取路由参数

![image-20210905162808752](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210905162808752.png)

- 可通过vue props属性获取路由参数。

![image-20210905162849405](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210905162849405.png)



- 重复使用不触发created方法

![](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210905162916167.png)

- 需要在组件创建，以及组件复用均执行
- 编写一个函数。重写created()中调用，以及复用组件的某一个回调函数，均调用
  - beforeRouteUpdate (to, from, next)。当复用的组件渲染后，路由更新前(即，首次进入不会回调)回调
  - beforeUpdate() 。复用组件渲染后，props/data数据更新前回调 

![image-20210905164328845](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210905164328845.png)

### 02.Keep-alive

- <Keep-alive>，无样式抽象的标签。缓存其中的组件对象(以及组件中的数据)

- 适合在组件之间切换时,保存数据状态使用·回调函数

- activated()。组件第一次渲染以及每次被激活时回调. deactivated()。组件“失活”时回调

  - activated()。组件第一次渲染以及每次被激活时回调
  - deactivated()。组件“失活”时回调

  ![image-20210905164526453](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210905164526453.png)

- 需要在组件创建，以及组件复用均执行
- 编写一个函数。重写created()中调用,以及复用组件的某一个回调函数，均调用
  - beforeRouteUpdate (to, from, next)。当复用的组件渲染后，路由更新前(即,首次进入不会回调)回调
  - beforeUpdate()。复用组件渲染后,props/data数据更新前回调

![image-20210905165347724](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210905165347724.png)

### 03.Recommended

- Vue组件粒度较细,重新创建渲染,不会有较大性能开销
- 因此,可以不缓存重用路由切换的组件
- 通过v-bind指令在router-view中,将标签key属性值，绑定到路由地址v-bind:key="sroute.path"
- 即,通过Key属性值的不同，标识为不同的节点。使，组件相同，但地址内容不同的组件可各自独立渲染
- 将在组件创建时需执行的代码(拉取数据等)，置于created()回调

![image-20210905165445398](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210905165445398.png)

## 10.Directives

- 指令(Directives)，是带有v-前缀的特殊特性
- 指令特性值,预期是单个JavaScript表达式
- 指令的职责是,当表达式的值改变时，将其产生的连带影响，响应式地作用于DOM
- v-text; v-if; v-on; v-bind; v-for; v-model;等
- 模板语法类似于EL表达式，vue指令类似于JST标签库,2者结合即可动态的显示数据
- 指令，必须声明在HTML标签。如果需要包含多个元素，而又无法声明div等元素包裹，可以使用<template>元素作为不可见的包裹元素

### 1.v-text

- 更新元素的textContent。如果需要更新部分textContent，使用{{Mustache}}插值。

### 2.v-if

- v-if; v-else; v-else-if
- 根据表达式的值的真假条件渲染元素

![image-20210912153331793](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210912153331793.png)

- Vue会尽可能高效地渲染元素，通常会复用已有HTML元素而不是重新创建
- 可提高渲染速度，同时复用元素的属性值。例如，如果允许用户在不同的登录方式之间切换:

![image-20210912153400703](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210912153400703.png)

### 3.v-show

- 与v-if不同，元素始终会被渲染并保留在DOM中。v-show只是简单地通过修改元素display属性实现/显示隐藏;没有else分支

![image-20210912154958024](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210912154958024.png)

### 4.v-if vs v-show

- v-if，是“真正”的条件渲染，它会确保在切换过程中条件块内的组件适当地被销毁和重建
- v-if，如果在初始渲染时条件为假，则什么也不做，直到条件第一次变真时渲染条件块
- v-show，不管初始条件，元素总是会被渲染，并且只是简单地基于CSS进行切换;且没有else分支
- v-if有更高的切换开销，而v-show有更高的初始渲染开销。因此，如果需要非常频繁地切换，使用v-show较好;如果在运行时条件很少改变，则使用v-if较好。

### 5.v-bind

- 动态绑定html标签属性,到响应式数据的表达式
- 缩写，例如:V-bind:key，可缩写为:key

![image-20210912155421527](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210912155421527.png)

![image-20210912163332578](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210912163332578.png)

### 6.v-for

- 根据一组数组的选项列表进行渲染
- 需要使用item in items形式的特殊语法，items是源数据数组并且 item是数组元素迭代的别名(foreach)

![image-20210912165156166](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210912165156166.png)

- 为了跟踪每个节点的标识，从而重用和重新排序现有元素，需要为每项提供一个唯一 key属性。理想的key值是每项都有的且唯一的id

![image-20210912171721174](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210912171721174.png)

![image-20210912171811632](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210912171811632.png)

![image-20210912171828304](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210912171828304.png)

### 7.Template Strings

- 模板字符串,允许嵌入表达式的字符串字面量
- 模板字符串使用反引号('),代替普通字符串的双引号和单引号
- 模板字符串可以包含特定语法，s{expression}占位符。占位符中的表达式与文本会一起传递给一个默认函数，该函数负责将所有的部分连接起来

![image-20210912171951119](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210912171951119.png)

### 8.Computed Properties - 2

- 需，基于属性,动态计算转换属性的值。但计算属性是属性，不是函数不接受参数!

![image-20210912172037941](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210912172037941.png)

- 属性本身不是函数，不接受参数。但JS属性的值，可以是一个函数!而函数自然可以接受参数

![image-20210912172115892](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210912172115892.png)

- 由于JavaScript 的限制，Vue不能自动检测以下变动的数组:
  - 利用索引直接设置一个项
  - 修改数组的长度
  - 在已引用的对象上增加属性

![image-20210912172155775](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210912172155775.png)

- 通过vue提供的全局方法实现数组的动态
- 在指定索引增加/更新对象
- $set(items, indexOfltem, newValue)

![image-20210912172550626](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210912172550626.png)

- 响应式删除指定位置数组对象
- $delete(items. indexOfltem)

![image-20210912173031883](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210912173031883.png)

## 11.Form&Input&Bindings

### 1.Event Handing

- v-on指令监听DOM事件,并在触发时运行指定程序
- 绑定组件实例的,methods属性中声明的方法
- 缩写,例如:v-on:click，可缩写为@click

![image-20210925225429676](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210925225429676.png)

### 2.Form Input Bindings

- V-model指令在表单元素上创建双向数据绑定
- 它会根据控件类型自动选取正确的方法来更新元素
- v-model本质上是语法糖,它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理
- v-model会忽略所有表单元素的value、checked、selected特性的初始值，而总是将Vue实例的数据作为数据来源。
- 应该通过JavaScript在组件的data ()中声明初始值

![image-20210925235835160](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210925235835160.png)

![image-20210927231431278](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210927231431278.png)

![image-20210927231652118](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210927231652118.png)

![image-20210927231702037](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20210927231702037.png)

- event，当前事件对象，可作为方法参数
- event.target，当前事件html元素对象
- event.target.propertyname，当前元素属性对应的值,例如
  - event.target.value，当前元素的值
  - event. target.selectedIndex，当前select元素选择的option的索引

## 12.V-model+Example

![image-20211004215837619](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211004215837619.png)

![image-20211004220056237](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211004220056237.png)

### 1.Watch

- 虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器
- Vue通过watch选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的

![image-20211004220200824](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211004220200824.png)

## 13.Vuex

- state，驱动应用的状态(数据)
- view,以声明方式将state映射到视图
- actions，响应在 view上的用户输入导致的状态变化

![image-20211004222545511](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211004222545511.png)

- 但是，当应用遇到多个组件共享数据状态时，单向数据流的简洁性很容易被破坏:
  - 多个视图依赖于同一状态
  - 来自不同视图的行为需要变更同一状态
- 问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力
- 问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份考贝。
- 以上的这些模式非常脆弱,通常会导致无法维护的代码
- 因此，我们为什么不把组件的共享状态抽取出来，以一个全局单例模式管理呢?在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置,任何组件都能获取状态或者触发行为!
- 通过定义和隔离状态管理中的各种概念并通过强制规则维持视图和状态间的独立性,我们的代码将会变得更结构化且易维护。

### 1.Vuex

- Vuex是为Vue.js应用程序的状态管理模式，米用集中式存储管理应用的所有组件需要的数据状态
- Vuex作为一个“唯一数据源(SSOT)”存在。这也意味着，每个应用将仅包含一个store实例
- store/index.js，vuex声明配置
- 基于vuex实现，V与数据源的绑定,同步/异步更新
- https://vuex.vuejs.org/zh/
- State，数据状态(数据源)。声明全局响应式状态
- Mutations，同步,更新state数据的事件
- Actions，异步,通知mutations更新state数据的事件
- Modules，多模块store整合

![image-20211004232215264](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211004232215264.png)

- State的绑定
- 与router对象相似，vue在根组件注入是store对象,因此在当前vue组件直接获得,通过计算属性绑定
- 当store中绑定数据改变时,重新计算响应式改变

![image-20211004232437268](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211004232437268.png)

- 基于vuex的mapState辅助函数，声明绑定计算属性

![image-20211004232538881](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211004232538881.png)

- Mutations，同步，更新state数据的事件
- 是声明/注册了一个事件，不是一个方法。当事件被激活，自动注入state,以及事件传入的参数
- commit()激活同步事件
- 不支持网络等异步操作

![image-20211005210554651](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211005210554651.png)

![image-20211005210620372](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211005210620372.png)

- Actions，异步，通知mutations更新state数据的事件
- 是声明/注册了一个支持异步操作的事件
- dispatch()方法激活异步事件
  当事件被激活，自动注入的commit，以及事件传入的参数
- 仍需基于同步事件更新state数据状态
- 用于网络等异步操作

![image-20211005211717615](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211005211717615.png)

## 14.Axios&Mock

### 1.Axios

- Promise based HTTP client for the browser and node.js
- 支持Promise的http请求库。Promise，ES6异步编程解决方案，比传统的回调函数和事件更合理更强大
- 基于ES7 Async/await更优雅的异步解决方案
- 支持HTTP get/post/put/patch/delete等请求类型
- 支持拦截器等
- 在项目下,安装axios npm i axios
- https://github.com/axios/axios
- 创建自定义axios文件，添加配置后，暴露

![image-20211005234320570](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211005234320570.png)

![image-20211005234354942](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211005234354942.png)

### 2.Mock

- 前端通过模拟数据,编写测试,实现独立于后端的开发
- 多种支持接收Ajax请求并返回模拟数据的库
  - Mockjs。支持模拟随机数/姓名/日期/email/图片/请求延迟等。但不支持模拟header，以及http状态码
  - axios-mock-adapter。支持模拟header，http状态码。但仅支持固定而非随机的模拟数据
- 模拟数据请求库仅用于开发测试环境,无需在生产环境下编译打包。因此安装在项目开发环境下。会声明在package.json下开发环境依赖devDependencies中。
- 在项目下,安装npm i axios-mock-adapter -d
- https://github.com/ctimmerm/axios-mock-adapter
- 创建src/mock/index.,js文件，配置并模拟请求处理及响应数据

![image-20211010171909512](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211010171909512.png)

- 在入口src/main.js，判断当前环境，仅在开发环境下引入。生产环境下编译打包时,不会执行

![image-20211010171952350](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211010171952350.png)

- /users/4/homeworks/21
- JS正则表达式，简单替换规则
- 将所有，/反斜杠,添加转义符替换\/;任意字符替换为\w+，添加结束符匹配$;整体置于//，之间

![image-20211010172209047](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211010172209047.png)

![image-20211010172228059](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211010172228059.png)

![image-20211010172320468](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211010172320468.png)

## 15.整合Vuex&Axios&Mock

- Repository层，service层，ViewModel层
- 已知前后端互交接口(restful APIs)，编写mock拦截请求模拟数据
- 已知互交接口的数据约定(payload，发送/接收json属性)，编写vuex中需要的state;以及异步actions事件，基于axios发送网络请求，将数据更新到state，或直接返给组件(响应数据无需与多组件共享)
- 已知异步事件,编写组件，created回调发送异步请求，视图模板绑定state数据,或直接等待异步数据渲染;添加router导航
- 示例
  -  /homeworks
  - homeworks/{ hid}
- 没有设计,就用到哪写到哪

## 16.Communication between components

- 父组件向子组件传递数据,可以通过在子组件中定义props属性,传入数据
- 子组件向父组件传递数据，子组件不应直接改变父组件的数据，必须通过vuex/事件,通知父组件改变(解耦,单向依赖)
- 不同层次间组件的通信，组件应是没有耦合的彼此独立的单元，因此组件间不应形成依赖
- 因此,vue组件间的通信,应通过
  - Global Event Bus
  -  Vuex

### 1.props

- 子组件中定义props属性,由父组件传入数据

![image-20211121231534690](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211121231534690.png)

- 父组件引入子组件，v-bind绑定子组件中属性

![image-20211121231244669](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211121231244669.png)

### 2.Why Listeners in HTML?

- 这种事件监听的方式违背了关注点分离(separation of concern)这个长期以来的原则
- 但所有Vue事件处理方法和表达式都严格绑定在当前视图的ViewModel上，它不会导致任何维护上的困难
- 实际上,使用v-on有几个好处:
  - HTML模板便能轻松定位在代码里对应的方法
  - 无须在 JavaScript里手动绑定事件，ViewModel代码是纯粹的逻辑，和DOM完全解耦,更易于测试
  - 当一个ViewModel被销毁时，所有的事件处理器都会自动被删除，无须担心内存占用

![image-20211121232818299](C:\Users\admin\AppData\Roaming\Typora\typora-user-images\image-20211121232818299.png)
