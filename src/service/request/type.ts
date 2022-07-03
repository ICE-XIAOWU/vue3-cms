import type { AxiosRequestConfig, AxiosResponse } from "axios"

export interface IUCERequestInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (err: any) => any
  responseInterceptors?: (res: T) => T
  responseInterceptorsCatch?: (err: any) => any
}

export interface IUCERequestConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: IUCERequestInterceptors<T>
  showloading?: boolean
}
