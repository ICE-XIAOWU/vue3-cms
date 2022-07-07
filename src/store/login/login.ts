import { Module } from "vuex"
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from "@/service/login/login"
import LocalCache from "@/utils/cache"
import router from "@/router/index"
import { mapMenusToRoutes, mapMenusToPermissions } from "@/utils/map-menus"

import type { IRootState } from "../type"
import type { ILoginState } from "./type"
import type { IAccountType } from "@/service/login/type"

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: "",
      userInfo: {},
      userMenus: [],
      permissions: []
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
      // 动态注册路由`

      routes.forEach((route) => {
        router.addRoute("main", route)
      })

      // 获取权限
      const permissions = mapMenusToPermissions(userMenus)
      state.permissions = permissions
    }
  },
  actions: {
    async accountLoginAction({ commit, dispatch }, payload: IAccountType) {
      // 1. 请求登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      commit("changeToken", token)
      LocalCache.setCache("token", token)
      // 1.1 请求页面初始数据
      dispatch("getInitialDataAction", null, { root: true })

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
    loadLocalLogin({ commit, dispatch }) {
      const token = LocalCache.getCache("token")
      if (token) {
        commit("changeToken", token)
        dispatch("getInitialDataAction", null, { root: true })
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
