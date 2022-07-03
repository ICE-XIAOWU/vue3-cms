import { Module } from "vuex"
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/service/login/login"
import LocalCache from "@/utils/cache"
import router from "@/router/index"
import { mapMenusToRoutes } from "@/utils/map-menus"

import type { IRootState } from "../type"
import type { ILoginState } from "./type"
import type { IAccountType } from "@/service/login/type"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, token: string) {
      state.token = token
    },
    changeUserInfo(state, userInfo: any) {
      state.userInfo = userInfo
    },
    changeUserMenus(state, userMenus: any) {
      state.userMenus = userMenus

      // 映射菜单路由
      const routes = mapMenusToRoutes(userMenus)
      // 动态注册路由
      // const newRoutes = routes.splice(0, 2)
      // newRoutes.forEach((route) => {
      //   router.addRoute("main", route)
      // })
    }
  },
  actions: {
    async accountLoginAction({ commit }, payload: IAccountType) {
      // 1. 请求登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit("changeToken", token)
      LocalCache.setCache("token", token)

      // 2. 请求用户数据
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      commit("changeUserInfo", userInfo)
      LocalCache.setCache("userInfo", userInfo)
      // 3. 请求菜单数据
      const userMenusResult = await requestUserMenusByRoleId(userInfo.role.id)
      const userMenus = userMenusResult.data
      commit("changeUserMenus", userMenus)
      LocalCache.setCache("userMenus", userMenus)

      // 4. 跳转到首页
      router.push("/main")
    },
    loadLocalLogin({ commit }) {
      const token = LocalCache.getCache("token")
      if (token) {
        commit("changeToken", token)
      }

      const userInfo = LocalCache.getCache("userInfo")
      if (userInfo) {
        commit("changeUserInfo", userInfo)
      }

      const userMenus = LocalCache.getCache("userMenus")
      if (userMenus) {
        commit("changeUserMenus", userMenus)
      }
    }
  }
}

export default loginModule
