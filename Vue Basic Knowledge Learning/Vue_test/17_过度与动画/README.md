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

```js
<transition-group name="hello" :appear="true">
    <h1 v-show="isShow" key="1">你好啊2！</h1>
<h1 v-show="!isShow" key="2">你好啊3！</h1>
</transition-group>
```

#### 3.备注

- 若有多个元素需要过度，则需要使用 
- 可以通过 appear 特性设置节点的在初始渲染的过渡
<transition-group>,且每个元素都要指定key值

```js
<transition-group name="animate__animated animate__bounce" :appear="true"
enter-active-class="animate__swing"
leave-active-class="animate__backOutUp"
>
    <h1 v-show="isShow" key="1">你好啊3！</h1>
</transition-group>
```

