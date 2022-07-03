import axios from "axios"
import { ElLoading } from "element-plus"
import type { AxiosInstance } from "axios"
import type { IUCERequestInterceptors, IUCERequestConfig } from "./type"
import type { LoadingInstance } from "element-plus/lib/components/loading/src/loading"

const DEFAULT_LOADING = true

class IUCERequest {
  instance: AxiosInstance
  interceptors?: IUCERequestInterceptors
  loadingInstance?: LoadingInstance
  showloading: boolean

  constructor(config: IUCERequestConfig) {
    // 每次new这个类都新建一个axios的实例
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    // 判断该选项是否有值，没有值使用默认的
    this.showloading = config.showloading ?? DEFAULT_LOADING

    // 1. 单个实例的拦截器
    // 发送拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptors,
      this.interceptors?.requestInterceptorsCatch
    )

    // 响应拦截器
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptors,
      this.interceptors?.responseInterceptorsCatch
    )

    // 全局拦截器
    // 发送请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showloading) {
          this.loadingInstance = ElLoading.service({
            lock: true,
            text: "数据请求中",
            background: "rgba(0, 0, 0, .5)"
          })
        }

        return config
      },
      (err) => {
        console.log("全局请求发送失败拦截器")
        return err
      }
    )

    // 响应请求拦截器
    this.instance.interceptors.response.use(
      (res) => {
        this.loadingInstance?.close()
        const data = res.data
        if (data.returnCode === "-1001") {
          console.log("请求失败，错误码= -1001")
        } else {
          // 移除加载动画
          return data
        }
      },
      (err) => {
        // 例子：判断不同的status
        if (err.response.status === 404) {
          console.log("404的错误～")
        }
        console.log("全局响应失败拦截器")
        return err
      }
    )
  }

  request<T>(config: IUCERequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求的拦截器
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }

      // 判断是否显示loading
      if (!config.showloading) {
        this.showloading = config.showloading ?? DEFAULT_LOADING
      }

      // 单个请求响应拦截器
      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求响应拦截器
          if (config.interceptors?.responseInterceptors) {
            res = config.interceptors.responseInterceptors(res)
          }
          this.showloading = DEFAULT_LOADING

          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T>(config: IUCERequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" })
  }

  post<T>(config: IUCERequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" })
  }

  delete<T>(config: IUCERequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" })
  }

  patch<T>(config: IUCERequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" })
  }
}

export default IUCERequest
