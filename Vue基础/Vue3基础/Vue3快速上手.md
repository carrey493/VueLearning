# Vue3快速上手

## 1.Vue3简介

- 2020年9月18日，Vue.js发布3.0版本，代号：One Piece(海贼王)
- 耗时两年多、2600+次提交、30+个RFC、600+此PR、99位贡献者
- github的tags: https://github.com/vuejs/vue-next/releases/tag/v3.0.0

## 2.Vue3带来了什么

### 1.性能的提示

- 打包大小减少41%
- 初次渲染快55%，更新渲染快133%
- 内存减少54%

### 2.源码的升级

- 使用Proxy代替defineProperty实现响应式
- 重写虚拟DOM的实现和Tree-Shaking

### 3.拥抱TypeScript

- Vue3可以更好的支持TypeScript

### 4.新的特性

#### 1.Composition API(组合API)

- setup配置
- ref与reactive
- watch与watchEffect
- provide与inject

#### 2.新的内置组件

- Fragment
- Teleport
- Suspense

#### 3.其他改变

- 新的生命周期钩子
- data选项应始终被声明为一个函数
- 移除keyCode支持作为v-on的修饰符

# 一、创建Vue3.0工程

## 1.使用vue-cli创建

- 官方文档： https://cli.vue.js.org/zh/guide/creating-a-project.html#vue-create

```
## 查看@vue/cli版本，确保@vue/cli版本在4.5.0以上
vue --version
## 安装或者升级你的@vue/cli
npm install -g @vue/cli
## 创建
vue create vue_test
##启动
cd vue_test
npm run serve
```

## 2.使用vite创建

- 官方文档：https://v3.cn.vuejs.org/guide/installation.html/#vite
- vite官网：https://vitejs.cn
  - 什么是vite? ---新一代前端构建工具
  - 优势
    - 开发环境中，无需打包操作，可快速的冷启动
    - 轻量快速的热重载（HMR）
    - 真正的按需加载，不再等待整个应用编译完成
  - 传统构建与vite构建对比图

![image-20211106142717038](../../../../../../../WINDOWS/System32/https:aidida.com/img/image-20211106142717038.png)

```
## 创建工程
npm init vite-app <project-name>
## 进入工程目录
cd <project-name>
## 安装依赖
npm install
## 运行
npm run dev
```

# 二、常用Composition API

## 1.setup 

### 1.理解

- Vue3.0中一个新的配置项，值为一个函数。

### 2.用途

- setup是所有Composition API（组合API）"表演的舞台"

### 3.用法

- 组件中所用到的：数据、方法等等，均要配置在setup中

### 4.setup函数的两种返回值：

- 若返回一个对象，则对象中的属性、方法，在模板中均可以直接使用（重点）

- 若返回一个函数：则可以自定义渲染内容（了解）

### 5.注意点

#### 1.尽量不要与Vue2.x配置使用

- Vue2.x配置（data、methods、computed...）中可以访问到setup中的属性、方法
- 但在setup中不能访问到Vue2.x配置（data、methods、computed...)
- 如果有重名，setup优先

#### 2.setup不能是一个async函数

- 因为返回值不再是return的对象，而是promise，模板看不到return对象中的属性

## 2.ref函数

#### 1作用

- 定义一个响应式数据

#### 2.语法

- const xxx = ref(initValue)
  - 创建一个包含响应式数据的引用对象（reference）对象
  - js中操作数据：xxx.value
  - 模板中读取数据：不需要.value，直接<div>{{xxx}}</div>

#### 3.备注

- 接收的数据可以是：基本类型、也可以是对象类型
- 基本数据类型：响应式依然是靠Object.defineProperty()的get与set完成的
- 对象类型的数据：内部”求助”了Vue3.0中的一个新函数--reactive函数

## 3.reactive函数

### 1.作用

- 定义一个对象类型的响应式数据（基本类型不要用它，要用ref函数）

### 2.语法

- const 代理对象 = reactive(源对象) 接收一个对象（或数组），返回一个代理对象（proxy对象）

**reactive定义的响应式数据是‘深层次的’**

**内部基于ES6的Proxy实现，通过代理对象操作源对象内部数据进行操作**

## 4.Vue3.0中的响应式原理

### 1.Vue2.x的响应式

#### 1.实现原理

- 对象类型：通过object.defineProperty()对属性的读取、修改进行拦截（数据劫持）
- 数组类型：通过重写更新数组的一系列方法来实现拦截。（对数组的方法进行了包裹）

```js
object.defineProperty(data,'count',{
    get(){},
    set(){}
})
```

#### 2.存在问题

- 新增属性、删除属性，界面不会更新
- 直接通过下摆哦修改数组，界面不会自动更新

### 2.Vue3.0的响应式原理

- 实现原理

  - 通过Proxy（代理）：拦截对象中任意属性的变化，包括：属性值的读写、属性的添加、属性的删除等

  - 通过Reflect（反射）：对被代理对象的属性进行操作

  - MDN中描述的Proxy与Reflect

    - Proxy https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy
    - Reflect https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect

    ```js
    new Proxy(person, {
            //读取属性
            get(target, propName) {
              return Reflect.get(target[propName]);
            },
            //修改追加属性
            set(target, propName, value) {
              Reflect.set(target,propName,value)
            },
            //删除属性
            deleteProperty(target, propName) {
              return Reflect.deleteProperty(target,propName)
            },
          });
    ```

    

    
