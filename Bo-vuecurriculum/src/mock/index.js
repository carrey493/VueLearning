import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

let mock = new MockAdapter(axios, { delayResponse: 2000 })

//通用的，将{}占位符的字符串路径，转为正则表达式对象
//例如，/users/{uid} /users/homeworks/{hid}
function path(p) {
  let reg = p.replace(/{\w+}/g, '\\w+').replace(/\//g, '\\/') + '$'
  return new RegExp(reg)
}

//===================
//reply的参数列表 (status,data,headers)
//stsus,http状态码 data是返回的json数据
mock.onGet('/users/12').reply(200, {
  user: { userId: 1, userName: 'Bo' },
})

//地址，支持JS正则表达式
//正则表达式\.由转义符，\/，替代
//匹配任意字符串， \w+
//$，结束。避免匹配多个
//等价于 /user/数字
mock.onGet(path('/user/{uid}')).reply(200, {
  user: { userId: 2, userName: 'SUN' },
})
// /users/4/homeworks/21
// \/users\/\w+\/homeworks\/\w+$
mock.onGet(path('/user/{uid}/homework/{hid}')).reply(200, {
  user: { userId: 4, userName: 'ZHANG' },
})

//config,axios config对象，包含请求信息。
//返回数组，[status,{data对象},{header对象}]
mock.onPost('/login').reply((config) => {
  console.log(config)
  //此时请求的json以及转为字符串，不是json对象，因此需要转换。
  let data = JSON.parse(config.data)
  console.log(data.user)
  return [
    200,
    {
      user: { userId: 333, userName: 'John Smith' },
    },
    {
      Authorization: '65a1c6a5ca65c1a',
    },
  ]
})

mock.onGet(path('/homeworks')).reply(200, {
  homeworks: [
    { id: 1, name: 'java1', deadline: '2021-10' },
    { id: 2, name: 'java2', deadline: '2021-11' },
    { id: 3, name: 'java3', deadline: '2021-12' },
  ],
})

mock.onGet(path('/homework/{hid}')).reply(200, {
  homework: { id: 1, name: 'java1', deadline: '2021-10' },
})

mock.onPost('login').reply((c) => {
  //此时请求的json已经转为字符串，不是json对象，因此需要转换回来
  let data = c.data
  let user = JSON.parse(data)
  let result = [401, { message: '用户名密码错误' }]
  if (user.number === '1001' && user.password === '123456') {
    console.log(user.number)
    result = [
      200,
      {
        role: '987654321',
      },
      {
        Authorization: '1a2a3a4a5s6s7e8re',
      },
    ]
  }
  return result
})
