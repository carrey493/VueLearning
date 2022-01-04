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

## 5.reactive对比ref

### 1.从定义数据的角度对比

- ref用来定义：基本数据类型
- reactive用来定义：对象（或数组）类数据
- 备注：ref也可以用来定义对象（或数组）类型的数据，它内部的会自动通过reactive转为代理对象

### 2.从原理角度对比

- ref通过object.defineProperty()的get与set来实现响应式（数据劫持）
- reactive通过使用Proxy来实现响应式（数据劫持），并通过Reflect操作源对象内部的数据

### 3.从使用角度对比

- red定义的数据：操作数据需要.value，读取数据时模板中直接读取取不需要.value
- reactive定义的数据：操作数据与读取数据：均不需要.value

## 6.setup的两个注意点

### 1.setup执行的时机

- 在beforeCreate之前执行一次，this是undefined

### 2.setup的参数

- props：值为对象，包含：组件外部传递过来，且在props配置中声明接受了的的属性
- context:上下文对象
  - attrs:值为对象，包含：组件外部传递过来，但没有在props配置中声明的属性，相当于this.$attrs
  - slots:收到的插槽内容，相当于this.$slots
  - emit:分发自定义事件的函数，相当于this.$emit

## 7.计算属性与监视

### 1.computed函数

- 与Vue2.x中computed配置功能一直
- 写法

```js
import {computed} from 'vue'
setup(){
    //计算属性-简写
    let fullName = computed(()=>{
        return person.firstName + '-' + person.lastName
    })
    //计算属性-完整
    let fullName = computed({
        get(){
            return person.firstName + '-' + person.lastName
        },
        set(value){
            const nameArr = value.split('-')
            person.firstName = nameArr[0]
            person.lastName = nameArr[1]
        }
    })
}
```

### 2.watch函数

- 与Vue2.x中watch配置功能一致
- 两个'小坑'
  - 监视reactive定义的响应式数据时：oldvalue无法正确获取、强制开启了深度监视 deep配置失效
  - 监视reactive定义的响应式数据中的某个属性时：deep配置有效

```js
//一、监视ref所定义一个的响应式数据
    watch(
      sum,
      (n, o) => {
        console.log("sum变了", n, o);
      },
      { immediate: true }
    );
    //二、监视ref所定义多个的响应式数据
    watch(
      [sum, msg],
      (n, o) => {
        console.log("sum或msg变了", n, o);
      },
      { immediate: true }
    );
    /* 
    三、监视reactive所定义一个的响应式数据的全部属性,
    注意 1.此处无法正确获得oldValue
         2.强制开启了深度监视 deep配置无效
    */
    watch(person, (n, o) => {
      console.log("person变化了", n, o);
    });
    /* 
    四·监视reactive所定义一个的响应式数据的某个属性,
    */
    watch(
      () => person.age,
      (n, o) => {
        console.log("person的age变化了", n, o);
      }
    );
    /* 
    五·监视reactive所定义多个的响应式数据,
    */
    watch([() => person.name, () => person.age], (n, o) => {
      console.log("name或age变了", n, o);
    });
    /* 六.特殊情况 */
    watch(
      [() => person.job],
      (n, o) => {
        console.log("job改变了", n, o);
      },
      { deep: true } //监视的是reactive元素定义的对象中的某个属性 所以deep配置有效
    );
```

### 3.watchEffect

- watch的套路是：既要指明监视属性，也要指明监视的回调

- watchEffect的套路是：不用指明监视哪个属性，监视的回调中用到哪个属性，那就监视哪个属性

- watchEffect有点像computed:

  - 但computed注重的计算出来的值（回调函数的返回值），所以必须要写返回值
  - 而wtachEffect更专注的是过程（回调函数的函数体），所以不用写返回值

  ```
  //wtachEffect所指定的回调中用到的数据只要发生变化，则直接重新执行回调
  wtachEffect(()=>{
  const x1 = sum.value
  const x2 = person.value
  console.log('wtachEffect配置的回调执行了')
  })
  ```


## 8.生命周期

![image-20211204163752832](https:aidida.com/img/image-20211204163752832.png)

![image-20211204163910960](https:aidida.com/img/image-20211204163910960.png)

- Vue3.0中可以继续使用Vue2.x中的生命周期钩子，但有两个被更名
  - beforeDestroy 改名为 beforeUnmount
  - destroyed改名为unmounted
- Vue3.0也提供了Composition API形式的生命周期钩子，与Vue2.x中钩子对应的关系如下
  - beforCreate-->setup()
  - created--->setup()
  - beforeMount-->onBeforeMount
  - mounted-->onMounted
  - beforeUpdate-->onBeforeUpdate
  - updated-->onUpdated
  - beforeUnmount-->onBeforeUnmount
  - unmounted-->onUnmounted

## 9.自定义hook函数

- 什么是hook?--本质是一个函数，把setup函数中使用的CompostionAPI进行了封装
- 类似于vue2.x中的mixin
- 自定义hook的优势：复用代码，让setup函数中的逻辑更清楚易懂

## 10.toRef

- 作用：创建一个ref对象，其value值指向另一个对象中的某个属性
- 语法 : const name = toRef(person,'name')
- 应用：要将响应式对象中的某个属性单独提供给外部使用
- 扩展：toRefs与toRef功能一致，但可以批量创建多个ref对象，语法：toRefs(person)

# 三、其他的Composition API

## 1.shallowReactive 与 shallowRef

- shallowReactive:只处理对象最外层属性的响应式（浅响应式）
- shallowRef:只处理基本数据类型的响应式，不进行对象的响应式处理
- 什么时候用？
  - 如果有一个对象数据，结构比较深，但变化时只是外层属性变化===》shallowReactive
  - 如果有一个对象数据，后续功能不会修改该对象中的属性，而是生成新的对象来替换===》shallowRef

## 2.readonly与shallowReadonly

- readonly:让一个响应式数据变为只读的（深只读）
- shallowReadonly:让一个响应式数据变为只读的（浅只读）
- 应用场景：不希望数据被修改时

