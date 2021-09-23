## props

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