import IUCERequest from "./request"
import { BASE_URL, TIME_OUT } from "./request/config"
import LocalCache from "@/utils/cache"

const IuceRuequest = new IUCERequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      // 携带token的拦截
      const token = LocalCache.getCache("token")
      if (token) {
        config.headers!.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorsCatch: (err) => {
      return err
    },
    responseInterceptors: (res) => {
      return res
    },
    responseInterceptorsCatch: (err) => {
      return err
    }
  }
})

export default IuceRuequest
