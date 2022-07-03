import axios from "axios"

// 1. get 请求
axios.get("http://123.207.32.32:8000/home/multidate").then((res) => {
  console.log(res)
})

// 2. post 请求 一般请求参数放在data里面
axios.post("http://123.207.32.32:8000/home/multidate", {
  data: {
    name: "iuce",
    age: 18
  }
})

// 3.  promise 本身是可以有类型的
// new Promise<string>((resolve) => {
//   resolve("12")
// }).then((res) => {
//   console.log(res)
// })

// 4. axios的配置选项
// 4.1 全局配置
//  < 1. 默认请求地址
axios.defaults.baseURL = "https://httpbin.org"
//  < 2. 请求超时时间
axios.defaults.timeout = 2000
//  < 3. 请求头部
// axios.defaults.headers = {}

// 4.2 局部配置
axios.get("http://123.207.32.32:8000/home/multidate", {
  params: {
    name: "ice",
    age: 19
  },
  // < 1. 局部配置
  timeout: 2000,
  headers: {}
})

// 5. axios.all 方法 --> 多个请求，一起返回
axios
  .all([
    axios.get("/get", { params: { name: "ice" } }),
    axios.post("/post", { data: { name: "iuce" } })
  ])
  .then((res) => {
    console.log(res[0].data)
    console.log(res[1].data)
  })

// 6. 拦截器
// < 6.1 请求拦截
// fn1: 请求发送成功执行的函数
// fn2: 请求失败执行的函数
// axios.interceptors.request.use(fn1, fn2);
axios.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    console.log("请求失败")
    return err
  }
)

// < 6.2 响应拦截
// fn1: 响应成功执行的函数
// fn2: 响应失败执行的函数
// axios.interceptors.response.use(fn1, fn2);
axios.interceptors.response.use(
  (res) => {
    console.log("响应成功拦截")
    return res
  },
  (err) => {
    console.log("响应失败拦截")
    return err
  }
)
