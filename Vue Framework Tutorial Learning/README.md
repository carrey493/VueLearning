# Vue全套教程，从vue2.0到vue3.0一套全覆盖，前端必会的框架教程
## Vue基础

### 课程介绍

#### 1.前端工程化与Webpack

- 前端工程化的相关概念
- webpack的常见用法
- 打包发布
- Source Map

##### 目标

- 了解工程化的前端开发知识
- 能够指导webpack在实际开发中所起到的作用

#### 2.Vue基础入门

- Vue的基本使用步骤
- Vue中常用的指令
- Vue-devtools调试工具

##### 目标

- 能够使用Vue指令完成页面结构的渲染
- 能够使用Vue的调试工具辅助Vue的开发

#### 3.Vue基础入门2

- 过滤器和侦听器
- 计算属性的用法
- axios的基本使用
- vue-cli的安装和使用

##### 目标

- 能够在实际开发中合理使用过滤器、侦听器、计算属性解决自己遇到的问题
- 能够使用axios发起Aajax请求
- 能够使用vue-cli工具生成工程化的Vue项目

#### 4.组件与生命周期

- 组件的注册与使用
- 组件的props与自定义属性
- 解决组件样式冲突
- 组价的生命周期
- 组件之间的通讯（数据共享）

##### 目标

- 能够掌握.vue单文件组件的基本用法
- 能够掌握组件通讯的三种方式
- 掌握组件生命周期的执行顺序和应用场景

#### 5.ref&购物车案例

- 使用ref引用DOM元素和组件实例
- $nextTick的基本使用
- 购物车案例

##### 目标

- 能够使用ref获取页面上的DOM或组件的引用
- 能够知道$nextTick的应用场景并合理地使用
- 通过“购物车”案例巩固知识

#### 6.Vue组件的高级用法

- 动态组件的使用
- 插槽的使用（默认插槽、具名插槽、作用域插槽）
- 自定义指令
- ESLint的使用

##### 目标

- 能够使用keep-live实现组件的缓存
- 能够使用插槽提高组件的复用性
- 能够了解常见的ESLint语法规则

#### 7.路由（vue-router）

- 路由的基本配置与使用
- 路由重定向
- 嵌套路由、动态路由

##### 目标

- 能够在项目中安装和配置路由
- 能够使用路由实现单页面应用程序的开发
- 能够使用路由守卫控制路由的访问权限

#### 8.黑马头条

- Vant组件库
- 封装axios
- 上拉加载&下拉刷新
- Vant主题定制

##### 目标

- 掌握Vant组件库的基本使用
- 能够知道如何封装axios请求模块
- 能够知道如何实现上拉加载和下拉刷新功能

### 前端工程化

#### 1 工程化

- 模块化（js的模块化、css的模块化、资源的模块化）
- 组件化（复用现有的UI结构、样式、行为)
- 规范化（目录结构的划分、编码规范化、接口规范化、文档规范化、Git分支管理)
- 自动化（自动化构建、自动部署、自动化测试)

#### 2 什么是前端工程化

- 前端工程化指的是:在企业级的前端项目开发中，把前端开发所需的工具、技术、流程、经验等进行规范化、标准化。
- 好处：前端开发自成体系，有一套标准的开发方案和流程

#### 3 前端工程化的解决方案

- 早期的前端工程化解决方案
  - grunt
  - gulp
- 目前主流的前端工程化解决方案
  - webpack
  - parcel

### webpack的基本使用

#### 1 什么是webpack

- 概念: webpack是前端项目工程化的具体解决方案。
- 主要功能:它提供了友好的前端模块化开发支持，以及代码压缩混淆、处理浏览器端JavaScript 的兼容性、性能优化等强大的功能。
- 好处:让程序员把工作的重心放到具体功能的实现上，提高了前端开发效率和项目的可维护性。
- 注意:目前Vue,React等前端项目，基本上都是基于 webpack进行工程化开发的。

#### 2 创建列表隔行变色项目

- 新建项目空白目录，并运行npm init -y命令，初始化包管理配置文件 package.json
- 新建src源代码目录
- 新建src -> index.html首页和src -> index.js 脚本文件
- 初始化首页基本的结构
- 运行npm install jquery -s命令，安装jQuery
- 通过ES6模块化的方式导入jQuery，实现列表隔行变色效果

#### 3 在项目中安装webpack

- 在终端运行如下的命令，安装webpack相关的两个包:npm install webpack@5.42.1 webpack-cli@4.7.2
- -S是--save的简写 ： dependencies：开发和生产环境下都需要
- -D是--save-dev的简写引 devDependencies：只在开发环境下需要

#### 4 在项目中配置webpack

- 在项目根目录中，创建名为webpack.config.js的webpack配置文件，并初始化如下的基本配置:

```js
module.exports = {
	mode: "development"
    //mode用来指定构建模式。可选值有 development 和 production
}
```

- 在package.json的 scripts节点下，新增dev脚本如下:

```json
"scripts": {"dev" :"webpack"}  // script 节点下的脚本，可以通过 npm run 执行。例如npm run dev
```

- 在终端中运行npm run dev命令，启动webpack进行项目的打包构建

#### 5 了解mode可选值的应用场景

**mode节点的可选值有两个，分别是** 

- development
  - 开发环境
  - 不会对打包生成的文件进行代码压缩和性能优化
  - 打包速度快，适合在开发阶段使用
- production
  - 生产环境
  - 会对打包生成的文件进行代码压缩和性能优化
  - 打包速度很慢，仅适合在项目发布阶段使用
**run 脚本的时候去读取命令**

#### 6 webpack中的默认约定

- 在webpack 4.x和5.x的版本中，有如下的默认约定:
  - 默认的打包入口文件为src -> index.js
  - 默认的输出文件路径为dist -> main.js
- 注意:可以在webpack.config.js中修改打包的默认约定

#### 7 自定义打包的入口与出口

在webbpack.config.js配置文件中，通过entry节点指定打包的入口。通过output节点指定打包的出口。示例代码如下:

```js
//entry指定要处理的文件路径
    entry: path.join(__dirname, './src/test.js'),

    //output指定生成文件的存放目录
    output: {
        //生成的目录
        path: path.join(__dirname, 'dist'),
        //生成的文件名
        filename:'bundle.js'
    }
```

### webpack中的插件

#### 1 webpack插件的作用

通过安装和配置第三方的插件，可以拓展webpack的能力，从而让webpack用起来更方便。最常用的webpack 插件有如下两个:

- webpack-dev-server
  - 类似于node.js阶段用到的nodemon工具
  - 每当修改了源代码，webpack 会自动进行项目的打包和构建
- html-webpack-plugin
  - webpack 中的HTML插件（类似于一个模板引擎插件)
  - 可以通过此插件自定制index.html页面的内容

#### 2.1 安装webpack-dev-server

代码改变后实时监听代码改动并重新渲染

运行如下的命令，即可在项目中安装此插件:

npm install webpack-dev-server@3.11.2 -D

#### 2.2 配置webpack-dev-server

- 修改package.json Pscripts 中的dev命令如下:
  
```js
"scripts": {"dev": "wcbpack serve"} //script 节点下的脚本，可以通过npm run执行
```
- 再次运行npm run dev命令，重新进行项目的打包
- 在浏览器中访问http://localhost:8080地址，查看自动打包效果
 
注意:webpack-dev-server会启动一个实时打包的http服务器

#### 3.1 安装 html-webpack-plugin

// 项目发布的时候会把所有文件都放在一个目录下也就是dist

运行如下的命令，即可在项目中安装此插件： 

npm install html-webpack-plugin@5.3.2 -D

#### 3.2 配置 html-webpack-plugin

```js
// 1. 导入HTML插件，得到一个构造函数
const HtmlPlugin = require('html-webpack-plugin')

// 2. 创建 HTML 插件的实例对象
const htmlPlugin = new HtmlPlugin({
  template: './src/index.html', // 指定原文件的存放路径
  filename: './index.html' // 指定生成的文件存放路径
})

module.exports = {
  mode: 'development',
  plugins: [htmlPlugin] // 3. 通过 plugins 节点，使 htmlPlugin 插件生效
}
```

#### 3.3 解惑 html-webpack-plugin

1. 通过HTML插件复制到项目根目录的index.html页面，也被放到了内存中
2. HTML插件在生成的index.html页面，自动注入了打包的bundle.js文件
