# Vue教程

## 01.初识

```javascript
new Vue({
    el: '#root', //用于指定当前Vue实例为哪个容器服务，值通常为css选择器符
    data () {
        return {
        }
    }
});
```

## 02.模板语法

### 1.插值语法

- ```html
  <h1>插值语法 {{name}}</h1>
  <h1>插值语法 {{school.name}}</h1>
  ```

### 2.指令语法

- ```html
  <a :href="url" :x="hello">百度</a>
  <a :href="url.toUpperCase()" x="hello">百度</a>
  <a :href="school.name" x="hello">百度</a>
  ```

## 03.数据绑定

```html
<div id="root">
    单向数据绑定：<input type="text" :value="name">
    双向数据绑定：<input type="text" v-model:value="name">
    <!--  只能用于输入类标签   v-mode----value 默认收集value值 -->
    双向数据绑定：<input type="text" v-model="name">
 </div>
```

## 04.el与data

### 1.el的两种写法

```javascript
new Vue({
    el: '#root', //用于指定当前Vue实例为哪个容器服务，值通常为css选择器符
    data () {
        //函数式
        console.log('!!!',this)
        return {
            name:'xxx',
            age: '62'
        }
    }
```

```javascript

//挂载root的另一种写法
const v = new Vue
v.$mount('#root')  
setTimeout(() => {
v.$mount('#root')
},1000)
v.$mount('#root')
```

### 3.data的两种写法

```javascript
//data:()=> this指向全局  箭头函数没有this指向全局window
//对象式
data:{
	name:'www',
	age: '58'
}
//函数式
data () {
    return {
        name:'xxx',
        age: '62'
}
```

## 05.MVVM

### 1.M：模型(Model)

- 对应data中的数据

### 2.V:视图(View)

- 模板

### 3.VM:视图模型(ViewModel)

-  Vue实例对象

```html
<div id="root">
    <h1>名称</h1>{{name}}：地址{{age}}</h1>
	<p>{{}} 属性  表达式  原型vm所有上的都能使用属性以及vue原型：数据代理</p>
	<p>{{$options}}</p>
	<p>{{$emit}}</p>
	<p>{{_c}}</p>
</div
```

## 06.数据代理

### 1.Object.definepropertry方法

```javascript
//关联
Object.defineProperty(person,'size',{
    //当有人读取person的size属性时，get函数就会被调用(getter) 且返回值就是size的值
    //size === ? --->getter
    get () {
        console.log('有人读取属性')
        return number
    },
    //当有人修改person的size属性时，set函数就会被调用(setter) 且会收到修改的具体值
    set () {
        console.log('有人修改')
        return number
    }
})
//这种方法添加的值是不可以被枚举的(不参与遍历)
Object.defineProperty(person,'age',{
    value: 18,
})

Object.defineProperty(person,'foot',{
    value: 18,
    enumerable:true, //控制属性是否可以被枚举可列举的
    //无法被修改

    writable: true, //控制属性是否可以被修改
    //不可被删除

    configurable: true //控制属性是否可以被删除
})
console.log(person)
```

### 2.数据代理

```javascript
//数据代理：通过一个对象代理对另一个对象中属性的操作
<script type="text/javascript">
    let obj1 = {
        x: 100
    }
    let obj2 = {
        y: 50
    }

    Object.defineProperty(obj2,'x',{
        get(){
            return obj1.x;
        },
        set(value) {
            obj1.x= value;
        }
    })
</script>
```

### 3.vue数据代理

- 数据代理：通过一个对象代理对另一个对象中属性的操作
- 通过vm对象来代理data对象中属性的操作（读\写）
- 通过Object.defineProperty()把data对象中所有属性添加到vm上
- 为每一个添加到vm上的属性都指定一个geeter/setter

## 07.事件处理

### 1.事件处理

```html
<button @click="showInfo1">点我提示信息1</button>
```

```javascript
 methods: {
     showInfo1(event) {
         // event默认事件
         console.log(event.target.innerText)
         alert('同学你好1！')
         console.log(this) //此处this === vm vue实例
         //showInfo:(event)=> 此处this是window对象
     }
 }
```

### 2.Vue事件修饰符

- prevent阻止默认事件

- stop阻止事件冒泡

- once 时间只触发一次

- capyure 使用事件的捕获模式

- self 只有event.target 是当前操作的元素时才触发事件

- passsive 事件的默认行为立即执行无需等待事件回调执行完毕

- 修饰符可以连续写

- scroll滚动条滚动 wheel滚轮滚动 触发事件不同 passive移动端用的较多

### 3.键盘事件

#### Vue按键别名

- 回车 enter

- 删除 delete

- 退出 esc

-  空格 space

- 换行 tab 使用keydown ---ctrl shift alt meta 系统修饰键  keyup同时按下其他键随后释放其他键事件才触发

-  上 up

- 下 down

-  左 left

- 右 right

- 大写锁定键 caps-lock短横线命名 也可以使用按键原始的key值

- 也可以使用keyCode值

- Vue.config.keyCodes.自定义键名 = 键码 定制按键别名

- keyup.ctrl.y可以连续写

## 08.计算属性

通过已有的属性计算而来

- 底层借助 Object.defineproerty的get set

- 优势 内部有缓存机制效率高调试方便

- 最终出现在vm上

- 如果计算属性被修改必须使用set函数响应 且set中要引起计算时依赖的数据发生改变

```javascript
computed: {
    fullName: {
        get() {
            //当有人读取fullName get就会调用 且返回值就作为fullName的值
            //在vm上 通过this调用 存在缓存中
            //get什么时候调用1.初次读取计算属性2.所依赖的数据发生变化时
            return this.firstName + '-' + this.lastName
        },
            //set:当fullName被修改时
            set(value){
                console.log('set',value)
                const arr = value.split('-')
                this.firstName = arr[0]
                this.lastName = arr[2]
            }
    }
}
```

### 计算属性简写

```javascript
computed: {
    //fullName: {
    //完整写法
    // get() {
    //     return this.firstName + '-' + this.lastName
    // },
    // //set:当fullName被修改时
    // set(value){
    //     console.log('set',value)
    //     const arr = value.split('-')
    //     this.firstName = arr[0]
    //     this.lastName = arr[2]
    // }
    //} 
    fullName() {
    //简写
    return this.firstName + '-' + this.lastName
    }
}
```

## 09.监视属性

### 1.两种写法

```javascript
watch: {
    isHot: {
    //发生改变时
    handler(newValue, oldVue) {
    	console.log("isHot被修改了！", newValue, oldVue);
    },
    //初始化让handler立即执行
    immediate: true,
    },
    info: {
    	handler(newValue, oldVue) {
    		console.log("info被修改了！", newValue, oldVue);
    	},
    },
}
```

```javascript
const vm = new Vue({})
vm.$watch("isHot", {
    handler(newValue, oldVue) {
        console.log("isHot被修改啦！", newValue, oldVue);
    },
    //初始化让handler立即执行
    immediate: true,
});
```

### 2.深度监视

- Vue能检测对象内部的属性 但是watch默认不行 使用deep属性打开监测
- 初始化让handler立即执行-----immediate: true

```javascript
numbers: {
    //深度监视
    deep:true,
        handler() {
        console.log('都改变啦')
    },
},
    //监视多级结构中某个属性的变化
 "numbers.a": {
	handler() {
		console.log("a改变啦");
	},
},
```

### 3.简写

```javascript
isHot(newValue, oldVue) {
	console.log("isHot被修改了！", newValue, oldVue);
}
```

- 所有Vue管理的函数不能使用箭头函数否则this指向会由vm转换为window
- Vue管理的函数 computed methods watch

### 4.计算属性与侦听属性的区别

**计算属性无法执行异步任务 侦听属性可以**

- 侦听属性里的属性最好写成普通函数

- 定时器执行的回调是不受vue控制的

  是浏览器定时器模块控制的 js引擎到点调用 必须使用箭头函数

  当将函数写为箭头时定时器中的this指向firstName

- 不被vue所管理的函数定时器回调函数 ajax回调函数 Promise的回调函数 最好写成箭头函数 这样的this才会指向vm

## 10.绑定样式

### 1.字符串学法

### 2.数组写法

### 3.对象写法

```html
<div id="root">
    <h1>hello {{name}}</h1>
    <div :class="test1">
        <!-- 字符串写法：适用于样式的类名不确定需要动态指定 -->
        <p>颜色</p>
        <button @click="change">点击</button>
    </div>

    <div :class="arr">
        <!-- 数组写法：要绑定的样式个数不确定名字不确定 -->
        <p>颜色</p>
        <button>点击</button>
    </div>

    <div :class="classObj">
        <!-- 对象写法：要绑定的样式个数确定名字确定动态决定用不用· -->
        <p>颜色</p>
        <button>点击</button>
    </div>

    <div :style="{fontSize: fsize+ 'px'}">{{name}}</div>
    <div :style="styleObj">{{name}}</div>
    <div :style="[styleObj,styleObj2]">{{name}}</div>
    <div :style="styleArr">{{name}}</div>
</div>
```

## 11.条件渲染

### 1.区别

- v-show 调整dispaly 频率比较高
- v-if  操作dom 频率比较低

```
<div>
    <p>{{n}}</p>
    <button @click="n++">n+1</button>
    <div v-show="n===1">AAA</div>
    <div v-show="n===2">BBB</div>
    <div v-show="n===3">CCC</div>

    <!-- 同组判断 -->
    <div v-if="n===1">A8A</div>
    <div v-else-if="n===2">B6B</div>
    <div v-else-if="n===3">C8C</div>
</div>
```

- template会形成作用域 二者配合使用template与v-if的使用

## 12.列表渲染

### 1.基本列表

```html
<ul>
    <!-- in---of -->
    <li v-for="(people,index) in persons" :key="people.id">
        {{people.name}}--{{people.age}}
    </li>
</ul>
```



### 2.key的原理

- key：虚拟Dom的标识 

- 当数据发生变化时vue根据新数据生成新的虚拟dom

-  随后进行新的虚拟DOM与旧的虚拟DOM的比较

- 内容没变直接使用之前的真实DOM

- 内容改变重新创建真实的DOM

- 使用index作为key修改数据破坏顺序时会产生错误的DOM更新

### 3.列表的过滤

```javascript
computed:{
    filPersons(){
        return this.persons.filter((p) =>{
            return  p.name.indexOf(this.keyWord) !== -1
        })
    }
}
```

### 4.列表的排序

```javascript
computed:{
    filPersons(){
        const arr = this.persons.filter((p) =>{
            return  p.name.indexOf(this.keyWord) !== -1
        })
        if(this.sortType){
            arr.sort((p1,p2) => {
                return this.sortType === 1 ? p2.age-p1.age : p1.age-p2.age
            })

        }
        return arr
    }
}
```

### 5.数据监测

```javascript
//创建一个监视的实例对象，用于监视data中属性的变化
const obs = new Observer(data)

//准备一个vm实例对象
let vm = {}
vm._data = data = obs

function Observer(obj){
    //汇总对象中所有的属性形成一个数组
    const keys = Object.keys(obj)
    //遍历
    keys.forEach((k)=> {
        Object.defineProperty(this,k,{
            get(){
                return obj[k]
            },
            set(val){
                obj[k] = val
            }
        })
    })
}
```

### 6.Vue.set的使用

```javascript
methods: {
    addSex() {
    // Vue.set(this.student, 'sex', '男');
    //vm
    this.$set(this.student,'sex','男')
    },
}
```

### 7.Vue数据监测原理

- vue会监视data中所有层次的数据

- 如何检测对象中的数据

- 通过setter实现监视 且要在new Vue时就传入要监测的数据

- 1.对象中后追加的属性Vue默认不做响应式处理

-  2.如需给后添加的属性做响应式请使用

     Vue.set(target,propertyName/index,value)

     vm.$set(target,propertyName/index,value)

- 如何监测数组中的数据

- 通过包裹数组更新元素的方法实现

     1.调用原生对应的方法对数组进行更新

     2.重新解析模板，进而刷新页面

- 在vue修改数组中的某个元素一定使用如下方法

     1.push,pop,shift,unshift,splice.sort,reverse

     2.Vue.set()或vm.$set()

- Vue.set()和vm.$set()不能给vm或者vm的根数据对象添加属性

## 13.表单数据收集

###  1.v-model的三个修饰符

- lazy:失去焦点再收集数据
- number:输入字符串转为有效的数字
- trim:输入首位空格过滤

### 2.input的type为text、radio ，v-model时

- 收集value的值

### 3.input的type为checkbox

- 没有配置value收集checked为布尔值
- 配置value 初始值为非数组收集checkbox的布尔值，若为数组则收集value组成的数组

## 14.Vue过滤器

### 1.定义

- 对要显示的数据进行特定格式化后再显示，适用于一些简单逻辑的处理

```javascript
<h3>现在是{{time | timeFormater('YYYY_MM_DD') | mySlice}}</h3>
<h3 :x="msg | mySlice"></h3>
//全局过滤器
    Vue.filter('mySlice',function(value){
        return value.slice(0,5)
    })
//局部过滤器
    filters:{
        //str如果没有传入参数则规定一个默认的值
        timeFormater(value,str='YYYY--MM-DD HH:mm:ss'){
            return dayjs(value).format(str)
        }
}
```

- 过滤器也可以接收额外参数、多个过滤器也可以串联
- 并没有改变原本的数据，是产生新的对应的数据

## 15.内置指令

### 1.v-text

- 作用：向其所在的节点中渲染文本内容
- 区别：v-text会替换掉节点中的内容，{{xx}}则不会

```html
<div v-text="str"></div>
```

### 2.v-html

- 作用：向指定节点中渲染包含html结构的内容
- 与插值语法的区别
  - v-html会替换掉节点中都所有内容，插值语法不会
  - v-html可以识别html结构
- 注意：v-html结构有安全性问题：在网站上动态渲染html容易导致XSS攻击

```html
<div v-html="str"></div>
str: "<h2>123</h2>"
```

### 3.v-cloak

- 本质是一个特殊属性，Vue实例创建完毕并接管容器后会删除掉v-cloak属性
- 使用css配合v-cloak当网速过慢时，不让未解析的模板展示

```html
<h2 v-cloak>{{name}}</h2>
```

### 4.v-once

- 所在节点在初次动态渲染后就视为静态内容了
- 以后数据的改变不会引起v-once所在的结构更新可以用于优化性能

```html
<h2 v-once> 初始化的N值是：{{n}}</h2>
```

### 5.v-pre

- 跳过其所在的节点编译过程
- 可利用它跳过：没有使用指令语法、没有使用插值语法的节点会加快编译

```html
<h2 v-pre>标题</h2>
```

## 16.自定义指令

### 1.局部指令 

- new Vue({directive:{指令名:配置对象}})

```javascript
big(element, binding) {
	element.innerText = binding.value * 10;
}
```



### 2.全局指令 

- Vue.directive{指令名,回调函数}

```javascript
bind: {
    //指令与元素成功绑定时，一上来
    bind(element, binding) {
    element.value = binding.value;
    //注意此处的this是window
    console.log(this);
    },
    //指令所在元素被插入页面时
    inserted(element, binding) {
    element.focus();
    },
    //指令所在的模板被重新解析时
    update(element, binding) {
    element.value = binding.value;
    element.focus();
}
```



### 3.配置对象中常用的3个回调

- bind:指令与元素成功绑定时调用
- inserted:指令所在元素被插入页面时调用
- update:指令所在的模板被重新解析时调用

### 4.备注

- 指令定义时不加v- 但使用时要加v-
- 指令如果是多个单词要使用user-name,不要使用userName命名

```javascript
<p v-big-plus="n">+</p>
"big-plus"(element, binding) {
	element.innerText = binding.value + 6;
}
```

## 17.生命周期

### 1.引出

**生命周期**

- 1.又名：生命周期回调函数、生命周期函生命周期钩子
- 2.是什么：Vue在关键时刻帮我们调用的一些特殊名称的函数
- 3.生命周期的函数的名字不可更改但函数的具体内容是程序员根据需求编写的
- 4.生命周期函数中的this指向是vm或者组件实例对象

### 2.分析

**4对生命周期钩子**

![image-20210819193308045](C:\Users\MECHREVO\AppData\Roaming\Typora\typora-user-images\image-20210819193308045.png)

![image-20210819193403702](C:\Users\MECHREVO\AppData\Roaming\Typora\typora-user-images\image-20210819193403702.png)

![image-20210819204353323](C:\Users\MECHREVO\AppData\Roaming\Typora\typora-user-images\image-20210819204353323.png)

![image-20210819193237347](C:\Users\MECHREVO\AppData\Roaming\Typora\typora-user-images\image-20210819193237347.png

- new Vue()

**数据监测与数据代理将要创建与创建完毕**

- Init Events & Lifecycle---> 初始化：生命周期、事件，但数据代理还未开始。
- **beforeCreate** 此时无法通过vm访问到data中的数据、methods中的方法。
- Init injections & reactivity--->初始化：数据监测、数据代理。
- **created** 此时可以通过vm访问到data中的数据、methods中的方法。

**此阶段Vue开始解析模板，生成虚拟DOM（内存中），页面还不能显示解析好的内容**

- Has "el" option
  - no--->when vm.$mount(el) is called----|
  - yes                                                  <---|
- Has "templete" option
  - yes--->compile template into render function
  - no--->compile el's outerHTML as template

**将要挂载与挂在完毕**------重要

- **beforeMount**

  - 此时页面呈现的是未经Vue编译的DOM结构
  - 所有对DOM的操作最终都不奏效

- Create vm$el and repace "el" with it --->将内存中的虚拟DOM转为真实DOM插入页面

- ### **mounted**

  - 页面中呈现的是经过Vue编译的DOM
  - 对DOM的操作均有效（尽可能避免）

- 至此初始化过程结束，一般在此进行：开启定时器、发送网络请求、订阅消息、绑定自定义事件、等初始化操作

- Mounted: when data changes

**更新之前与更新完毕**

- **beforeUpdate **此时数据时新的但页面时旧的，即页面尚未和数据保持同步
- Virtual Dom re-render and patch
  - 根据新数据生成新的虚拟DOM
  - 随后与旧的虚拟DOM进行比较，最终完成页面更新
  - 即完成了Model->View的更新
- **updated** 此时数据时新的，页面也是新的的，即页面和数据保持同步
- when VM.$destroy is called

**销毁之前与销毁完毕**------重要

- **beforeDestroy** 
  - 此时vm中所有的data、methods\指令等等都处于可用状态，马上要执行销毁过程
  - 所有对数据的修改不会触发更新
  - 一般在此阶段：关闭定时器、取消订阅消息、解绑自定义事件等收尾操作。
- Teardown watchers,child components and event listeners
- Destroyed
- **destoroyed**
  - 所有对数据的修改不会触发更新

### 3.总结

- 1.常见的生命周期钩子：
  -  mounted:发送ajax请求、启动定时器、绑定自定义事件、订阅消息等初始化操作
  - beforeDestroy:清楚定时器，解绑自定义事件、取消订阅
- 2.关于销毁Vue实例
  - 销毁后Vue开发者工具看不到任何信息
  - 销毁后自定义事件不会失效，但原生DON事件依然有效
  - 一般不会在before操作数据，因为即便操作数据也不会再触发更新流程了

## 18.非单文件组件

### 1.基本使用

#### 1.定义

- 实现应用中局部功能代码和资源的集合

#### 2.步骤

- 定义组件
- 注册组件
- 使用组件

#### 3.如何定义

- 使用Vue.extend(options)
- 使用template可以配置组件结构

```js
const school = Vue.extend({
//组价定义时，不写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器
    template: `
        <div>
        <h2>学校名称: {{schoolName}}</h2>
        <h2>学校地址: {{address}}</h2> 
        <button @click="tip">提示</button>
        </div>
    `,
    data() {
        return {
            schoolName: "尚硅谷",
            address: "武汉",
        };
    },
    methods: {
    tip() {
    alert(this.schoolName);
    },
},
```

#### 4.如何注册

- 局部注册：靠new Vue的时候传入componets选项

```js
components: {
    school: school,
    student,
}
```



- 全局注册：靠Vue.component(‘组件名’,组件)

```javascript
Vue.component('hello',hello)
```



#### 5.编写组件标签

- <xxx></xxx>

### 2.注意点

#### 1.组件名

- 一个单词组成：school , School
- 多个单词组成：my-school, MySchool(脚手架)
- 尽可能回避html元素作为组件名
- 组件命名语义化
- 可以使用name配置项指定组件在开发者工具中呈现的名字

#### 2.组件标签

- <school></school>
- <school/>(脚手架)

#### 3.简写方式

- const school = Vue.extend(options)  ---> const school = options

### 3.组件的嵌套

```js
template:`<app></app>`
template:`
    <div>
    <school></school>
    <hello></hello>
</div> `,
```

### 4.VueComponent

-  关于VueComponent 组件是可复用的Vue实例
- 组件本质：一个名为VueComponent的构造函数，是由Vue.extend生成的
- .写组件时，Vue解析时会帮我们创建schoo组件的实例对象即Vue执行 new VueComponent(options)
- 每次调用Vue.extend 返回的都是一个全新的VueComponent
- 关于this指向
  - 组件配置中，它们的this均是VueComponent实例对象
  - new Vue(options)配置中，他们的this均是Vue实例对象
- VueComponent实例对象简称vc,也称之为组件实例对象 无el
- Vue的实例对象简称vm 有el==>根实例

### 5.内置关系

- 一个重要的内置关系： VueComponent.prototype.__proto__ === Vue.prototype
- 为什么要有这个关系：让组件实例对象vc可以访问到Vue原型上的属性、方法

![image-20210822162025569](C:\Users\MECHREVO\AppData\Roaming\Typora\typora-user-images\image-20210822162025569.png)

- 只有函数才配拥有显示原型属性
-  实例的隐式原型属性永远指向自己缔造者的原型对象

## 19.单文件组件

- index.html
  - vue.js
  - main.js
    - App.vue
      - School.vue
      - Student.vue

## 20.Vue脚手架

### 1.脚手架文件结构

- node_moudles

  - public
    - favicon.ico :页签图标
    - index.html :主页面
  - src
    - assets: 存放静态资源
      - logo.png
    - component:存放组件
      - HellpWorld.vue
    - App.vue 汇总所有组件
    - main.js :入口文件
  - .gitignore :git版本管制忽略文件
  - babel.config.js :babel的配置文件
  - package.json :应用包配置文件
  - package-lock.json :包版本控制文件

### 2.关于不同版本的Vue

- vue.js是完整版的Vue,包含：核心功能+模板解析器

- vue.runtime.xxx.js是运行版的Vue,只包含：核心功能；没有模板解析器

- 因为vue.runtime.xxx.js没有模板解析器，所以不能使用templete配置项

- 需要使用render函数收到ceateElement函数去指定具体内容 


  ### 3.vue.config.js配置文件

  - 使用vue inspect > ouyput.js 可以查看Vue脚手架的默认配置

## 21.ref

  - 被用来给元素或子组件注册引用信息--id的替代者
  - 应用在html标签中获取的是真实DOM元素，应用在组件标签上是组件实例对象
  - 使用方式 ref="xxx" ---> this.$refs.xxx

## 22.props

**功能：让组件接收外部传过来的数据**

### 1.传递数据

- <Demo name="xxx">

### 2.接收数据

- props:['name','age','sex']	//简单接收

-  props:{name: String,} 	//接收的同时对数据：进行类型限制+默认值的指定+必要性的限制

- props: {

    name: {type: String, //类型 required: true, //是否必要},

  //接收的同时对数据：进行类型限制+默认值的指定+必要性的限制

**props数据优先接收**

- props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，若业务需求确实需要修改，请复制props的内容到data中一份，然后去修改data中的数据

## 23.mixin(混入)

- 功能：可以把多个组件共用的配置提取成一个混入对象
- 使用方式
  - 定义混合
    - {data(){},methods:{}}
  - 使用混合
    - 全局混入: Vue.mixin(xxx)
    - 局部混入：mixins:['xxx']

## 24.TodoList

### 1.组件化编码流程

- 拆分静态组件
- 实现动态组件
  - 一个组件在用放在自身组件
  - 一些组件在用放在共同的父组件--->状态提升
- 实现交互从绑定事件开始

### 2.props适用

- 父组件=>子组件通信
- 子组件=>父组件通信(要求父组件给子组件一个函数)

### 3.v-model注意

- v-model绑定的值不能是props传过来的值，因为props是不可以修改的

### 4.备注

- props传过来的值若是对象类型的值，修改对象中的熟悉Vue时不会报错，但不推荐这样做

## 25.webStorage

### 1.存储大小

- 存储内容大小一般支持5M左右，不同浏览器不同

### 2.存储机制

- 浏览器通过Window.sessionStorage 和 Window.localStorage属性来实现本地存储机制

### 3.相关API

**Window.sessionStorage 和 Window.localStorage同Api**

- 存储：sessionStorage.setItem("msg", "hello");
- 读取：sessionStorage.getItem("msg")
- 删除：sessionStorage.removeItem("msg");
- 清空sessionStorage.clear();
- 这些方法接受一个键和值作为参数

### 4.备注

- sessionStorage存储的内容会随着浏览器窗口的关闭而消失
- localStorage存储的内容需要手动清除才会消失
- Window.sessionStorage 和 Window.localStorage对应的value获取不到那么getItem的返回值是null
- JSON.parse(null)的结果依然是null

## 26.组件的自定义事件

### 1.适用

- 一种组件间通信的方式，适用于 子组件===》父组件

### 2.使用场景

- A是父组件，B是子组件，B想给A传数据，那么就要在A中给B中绑定自定义事件(事件的回调在A中)

### 3.绑定自定义事件

- 1.在父组件中通过@或v-on绑定
- 2.在父组件中指定子组件的ref通过this.$refs.xxx.$on

### 4.触发自定义事件

- this.$refs.xxx$on('xxx',数据)

### 5.解绑自定义事件

- this.$off('xxx')

### 6.绑定原生事件

- 使用native修饰符

### 7.注意

- 通过this.$refs.xxx.$on('xxx',回调)绑定自定义事件时，回调要么配置在methods,要么用箭头函数，负责this指向会出现问题

## 27.全局事件总线

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

## 28.消息订阅与发布（pubsub）

### 1.用途

- 一种组件间通信的方式，适用于任意组件间通信

### 2.使用步骤

- 1.安装 npm i pubsub-js

- 2.引入 import pubsub from 'puvsub-js'

- 3.接收数据

  - A想接收数据，则在A组件中订阅消息，订阅的回调留在A组件本身

  ```js
  methods:{
      demo(name,data){
        console.log('有人发布了hello组件，hello消息的回调执行了',name,data,this);
      }
    },
    mounted() {
      /* this.$bus.$on('hello',(data)=>{
        console.log('School组件,收到了',data);
      }) */
      /* this.pubId = pubsub.subscribe('nihao',(name,data)=>{
        //消息订阅
        console.log(this);
        console.log('有人发布了hello组件，hello消息的回调执行了',name,data);
      }) */
      this.pubId = pubsub.subscribe('nihao',this.demo)
    },
    beforeDestroy() {
      /* this.$bus.$off('hello') //销毁之前解绑 */
      pubsub.unsubscribe(this.pubId)
    }
  ```

- 4.提供数据 pubsub.publish('xxx',数据)
- 5.最好在beforeDestroy钩子中，用pubsub.unsubscribe取消订阅

## 29.nextTick

### 1.语法

- this.$nextTick(回调函数)

### 2.作用

- 在下一次DOM更新结束后执行其指定的回调

### 3.时机

- 当改变数据后，要基于更新后的新DOM进行某些操作时，要在nectTick所指定的回调函数中执行

## 30.Vue封装的过度与动画

### 1.作用

- 在插入、更新或移除DOM元素时，在合适的时候给元素添加样式类名

### 2.图示

- ![image-20210915202036239](C:\Users\MECHREVO\AppData\Roaming\Typora\typora-user-images\image-20210915202036239.png)

### 3.写法

#### 1.准备好样式

- 元素进入的样式
  - v-enter:进入的起点
  - v-enter-active:进入过程中
  - v-enter-to:进入的终点
- 元素离开的样式
  - v-leave:离开的起点
  - v-leave-active:离开的过程中
  - v-leave-to:离开的终点

#### 2.使用

- 使用transition包裹要过度的元素，并配置name属性
- 可以通过 appear 特性设置节点的在初始渲染的过渡

```js
<transition-group name="hello" :appear="true">
    <h1 v-show="isShow" key="1">你好啊2！</h1>
<h1 v-show="!isShow" key="2">你好啊3！</h1>
</transition-group>
```

#### 3.备注

- 若有多个元素需要过度，则需要使用 <transition-group>,且每个元素都要指定key值

```js
<transition-group name="animate__animated animate__bounce" :appear="true"
enter-active-class="animate__swing"
leave-active-class="animate__backOutUp"
>
    <h1 v-show="isShow" key="1">你好啊3！</h1>
</transition-group>
```

## 31.vue脚手架配置代理

### 1.方法一

- 在vue.config.js中添加下列配置

```js
devServer:{
    proxy: 'http://localhost:5000'
}
```

- 优点：配置简单，请求资源直接发给前端8080即可
- 缺点：不能配置多个代理，不能灵活的控制请求是否走代理
- 工作方式：若按上述配置代理，当请求了前端不存在的资源时，那么请求会转发给服务器（优先匹配前端资源）

### 2.方法二

- 编写vue.config.js配置具体代理规则

```js
 proxy: {
      "/atguigu": {//匹配所有以'以/atguigu'开头的请求路径
        target: "http://localhost:5000",//代理目标的基础路径
        pathRewrite: { "^/atguigu": "" },
        ws:true,//用于支持websocket
        changeOrigin:true //用于控制请求头中的host值
      },
      "/demo": {
        target: "http://localhost:5001",
        pathRewrite: { "^/demo": "" },
        ws:true,//用于支持websocket
        changeOrigin:true //用于控制请求头中的host值
      },
    },
       /*
       changeOrigin默认为true
       true:为请求地址的端口号
       false:为发出请求地址的端口号
       */
```

- 优点：可以配置多个代理，且可以灵活的控制请求是否走代理
- 缺点：配置略微繁琐，请求资源时必须加前缀

## 32.插槽

### 1.作用

- 让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于父组件=》子组件

### 2.分类

- 默认插槽 、具名插槽、作用域插槽

### 3.使用方式

#### 1.默认插槽

```js
<div class="category">
    <h3>{{title}} 分类</h3>
<slot>可以设置默认值当使用者没有传递具体结构时我会出现</slot>
</div>
```

#### 2.具名插槽

```js
<div class="category">
    <h3>{{ title }} 分类</h3>
<slot name="first">可以设置默认值当使用者没有传递具体结构时我会出现1</slot>
<slot name="second">可以设置默认值当使用者没有传递具体结构时我会出现2</slot>
</div>
<!-- v-slot最新写法，必须使用template标签包裹 
普通写法 slot="second"
    -->
    <template v-slot:second>
        <div class="test">
            <p>电影院1</p>
<p>电影院2</p>
</div>
<h4 slot="second">观影</h4>
</template>
```

#### 3.作用域插槽

- 理解：数据在组件自身，但根据数据生成的结构需要组件的使用者来决定

```js
<Category title="游戏">
<template slot-scope="{youxi}">
<h4 v-for="(g, index) in youxi" :key="index">{{ g }}</h4>
</template>
</Category>
<div class="category">
<h3>{{ title }} 分类</h3>
<slot :youxi="games"
>可以设置默认值当使用者没有传递具体结构时我会出现1</slot
>
</div>
```

## 33.Vuex

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

## 34.Vue-router

### 1.vue-router

- 理解：vue的一个插件库，专门用来实现SPA应用

### 2.SPA

- 单页面应用
- 整个应用只有一个完整的页面
- 点击页面中的导航链接不会刷新页面，只会做页面的局部刷新
- 数据需要通过ajax请求

### 3.路由

- 什么是路由
  - 一个路由就是一组映射关系 key--value
  - key为路径，value可能是function或component
  
- 路由分类
  - 后端路由
    - value是function,用于处理客户端提交的请求
    - 工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据
  - 前端路由
    - value是component用于展示页面内容
    - 工作过程：当浏览器的路径改变时，对应的组件就会显示
    - key是路径，value是组件
  
- 基本使用

  - 安装vue-router,命令 npm i vue-router
  - 应用插件 Vue.use(VueRouter)
  - 编写配置项

  ```js
  //创建整个应用的路由器
  import VueRouter from "vue-router";
  import About from '../componets/About'
  import Home from '../componets/Home'
  
  export default new VueRouter({
      routes:[
          {
              path:'/about',
              component:About
          },
          {
              path:'/home',
              component:Home
          }
      ]
  })
  
  Vue.use(VueRouter)
  
  //创建vm
  new Vue({
    el: "#app",
    render: (h) => h(App),
    router
  });
  ```

  - 借助router-link标签实现路由的切换
  - active-class路由被激活时的样式

  ```js
  <router-link class="list-group-item"  active-class="active" to="/about">About</router-link>
  <router-link class="list-group-item" active-class="active" to="/home">Home</router-link>
  ```

  - router-view指定组件的切换位置

  ```js
  <router-view></router-view>
  ```


### 4.注意点

- 路由组件通常存放在pages文件夹，一般组件通常存放在components文件夹
- 通过切换，隐藏了的路由组件，默认是被销毁掉的，需要的时候再去挂载
- 每个组件都有自己的$route属性，里面存储着自己的路由信息
- 整个应用只有一个router,可以通过组价的$router属性获取到

### 5.多级路由

- 配置路由规则。使用children配置项：

```js
{
    path:'/home',
        component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message
                },
            ]
}
```

- 跳转（要写完整路由）

```js
<router-link class="list-group-item " active-class="acive" to="/home/news">News</router-link>
```

### 6.路由的query参数

- 传递参数

```js
<!-- 跳转路由并携带query参数，to的字符串写法 -->
<!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link -->
<!-- 跳转路由并携带query参数，to的对象写法 -->
<router-link
:to="{
path: '/home/message/detail',
query: {
id: m.id,
title: m.title,
},
}"
>{{ m.title }}</router-link
>
```

- 接收参数

```js
$route.query.id
$route.query.title
```

### 7.命名路由

- 作用：可以简化路由的跳转

- 如何使用：

  - 给路由命名

    ```js
    {
    name: "about",
    path: "/about",
    component: About,
    },
    ```

  - 简化跳转

  ```js
  <router-link
  class="list-group-item"
  active-class="active"
  :to="{ name: 'about' }"
  >About</router-link
  >
  ```

### 8.路由的params参数

- 配置路由，声明接收params参数

```js
{
path: "message",
component: Message,
children: [
{
name: "detail",
path: "detail/:id/:title",
component: Detail,
},
],
},
```

- 传递参数

```js
<router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link>
<router-link
:to="{
name: 'detail',//不允许写path必须写name
params: {
id: m.id,
title: m.title,
},
}"
>{{ m.title }}</router-link
>
```

- 特别注意：路由携带params参数时，若使用to对象的写法，则不能使用path配置项，必须使用name配置。
- 接收参数

```js
$route.params.id
$route.params.title
```

### 9.路由的props配置

```js
{
name: "detail",
path: "detail/:id/:title", //使用占位符声明接收params参数
component: Detail,
//props第一种写法值为对象，该对象中所有的key-value都会以props的形式传给detail组件
/* props: {
a: 1,
b: "hello",
}, */
//props第二种写法值为布尔值，若布尔值为真，就会把该组件收到的所有params参数，以props的形式传给detail组件
/* props: true, */
//props第三种写法值为函数
props($route) {
//{params:{id,title}}
return { id: $route.params.id, title: $route.params.title };
//return {id,title}
}
```

### 10.router-link的replace属性

- 作用：控制路由跳转时操作浏览器历史纪录的模式
- 浏览器的历史记录有两种写入方式：分别为push和replace，push是追加历史记录，replace是替换当前记录。路由跳转的时候默认为push
- 如何开启replace模式：

```js
<router-linkreplace:to="{ name: 'about' }">About</router-link>
```

### 11.编程式路由导航

- 作用：不借助router-link实现路由跳转，让路由跳转更灵活
- 实现

```js
pushShow(m) {
      //console.log(this.$router);
      this.$router.push({
        name: "detail",
        params: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m){
      this.$router.replace({
        name: "detail",
        params: {
          id: m.id,
          title: m.title,
        },
      });
    }
```

- go:可以实现多步跳转正数为向前跳转几步，负数为向后跳转几步
- back:向后退一步
- forward:向前进一步

### 12.缓存路由组件

- 作用：让不展示的路由组件保持挂载，不被销毁
- 实现：

```js
<keep-alive include="News">
<!-- 组件名 -->
	<router-view></router-view>
</keep-alive>
```

### 13.路由激活失活钩子

- 作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态
- 具体名字
  - activated:路由组件被激活时触发
  - deactived：路由组件失活是触发

### 14.路由守卫

- 作用：对路由进行权限控制
- meta:路由元信息，配置title等信息，可以用来判断路由的跳转以及权限·验证等功能。
- 分类：全局守卫、独享守卫、组件内守卫
- 全局守卫

```js
//全局前置路由导航守卫，初始化和每次路由切换之前调用
router.beforeEach((to,from,next)=>{
  console.log('前置路由导航守卫',to,from);
  // 可选择path与name进行判断
  // if(to.path ==='/home/news' || to.path === '/home/message')
  //判断是否需要鉴别权限
  if(to.meta.isAuth){
    if(localStorage.getItem('school') === 'atguigu'){
      // document.title = to.meta.title || '硅谷'
      next()
    }
     else {
      alert('学校名不对，无权限查看。')
    }
  }
  else {
    // document.title = to.meta.title || '硅谷'
    next()
  }
})

//全局后置路由导航守卫，初始化和每次路由切换之后调用
router.afterEach((to,from)=>{
  console.log('后置路由守卫',to,from);
  document.title = to.meta.title || '硅谷'
})
```

### 15.独享路由守卫

- 某一个路由所独享的
- 名称：beforeEnter
- 没有afterEnter

```js
beforeEnter: (to, from, next) => {
console.log("前置路由导航守卫", to, from);
// 可选择path与name进行判断
// if(to.path ==='/home/news' || to.path === '/home/message')
//判断是否需要鉴别权限
if (to.meta.isAuth) {
if (localStorage.getItem("school") === "atguigu") {
// document.title = to.meta.title || '硅谷'
next();
} else {
alert("学校名不对，无权限查看。");
}
} else {
// document.title = to.meta.title || '硅谷'
next();
}
},
```

### 16.组件内守卫

```js
  beforeRouteEnter(to, from, next) {
    console.log("进入时-beforeRouteEnter-路由导航守卫", to, from);
    //判断是否需要鉴别权限
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("学校名不对，无权限查看。");
      }
    } else {
      next();
    }
  },
  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("离开时-beforeRouteLeave-路由导航守卫", to, from);
    //判断是否需要鉴别权限
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("学校名不对，无权限查看。");
      }
    } else {
      next();
    }
  },
```

### 17.路由器的两种工作模式

- 对于一个url来说，什么是hash值？-#及其后面的内容就是hash值
- hash值不会包含在http请求中，即：hash值不会带给服务器
- hash模式：
  - 地址中永远带着#号，不美观。
  - 若以后将地址通过第三方手机app分享，若app校样严格，则地址会被标记为不合法
  - 兼容性较好
- history模式
  - 地址干净，美观
  - 兼容性和hash模式相比略差
  - 应用部署上线需要后端人员支持，解决刷新页面服务端404的问题

# 完结
