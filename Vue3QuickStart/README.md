# Vue3快速上手

学习地址：https://www.bilibili.com/video/BV1Za4y1r7KE

## Vue3简介

- 2020年9月18日，`Vue.js` 发布版 `3.0` 版本，代号: `One Piece`(海贼王)
- 经历了：4800+次提交、40+个RFC、600+次PR、300+贡献者
- 官方发版地址：[Release v3.0.0 One Piece·vuejs/core](https://github.com/vuejs/core/releases/tag/v3.0.0)
- 截止2023年10月，最新的公开版本为：`3.3.4`

![](https://img2024.cnblogs.com/blog/2332774/202401/2332774-20240128213637375-583815485.png)

1. **性能的提升**

- 打包减少`41%`
- 初次渲染快55%，更新渲染快`133%`
- 内存减少`54%`

2. **源码的升级**

- 使用`Proxy`代替`defineProperty`实现响应式。
- 重写虚拟`DOM`的实现和`Tree-Shaking`。

3. **拥抱TypeScript**

- `Vue3`可以更好的支持`TypeSCript`

4. **新特性**

- `Composition Api`(组合API)
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

## 创建Vue3工程

1. 基于vue-cli创建

>备注：目前`vue-cli`(webpack)已处于维护模式，官方推荐基于`Vite`创建项目。

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

2. 基于vue-cli创建

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