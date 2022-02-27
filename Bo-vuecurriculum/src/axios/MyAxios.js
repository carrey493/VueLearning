import axios from 'axios'
import store from '@/store/index'
axios.defaults.baseURL = '/api/'
import { GET_EXCEPTION } from '@/store/types'
import { author } from '@/utils/Const'
//axios.defaults.baseURL = 'http://localhost:8080/api/'

//请求拦截器
axios.interceptors.request.use(
  (req) => {
    return req
  },
  (error) => {
    return Promise.reject(error)
  }
)

//响应拦截器
axios.interceptors.response.use(
  (resp) => {
    return resp
  },
  (error) => {
    let resp = error.response
    if (resp) {
      switch (resp.status) {
        case 401:
          //
          break
      }
      //此时为同步事件，统一将任意异常信息，置于store
      store.commit(GET_EXCEPTION, { message: resp.data.message })
    }
    //异常统一弹出解决，因此不再返回Promise inject
    return Promise.resolve()
  }
)

export default axios
