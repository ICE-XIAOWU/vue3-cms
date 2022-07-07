import { createStore, useStore as vuexStore } from "vuex"
import { Store } from "vuex"
import { getPageListData } from "@/service/main/system"

import login from "./login/login"
import system from "./main/system"
import analysis from "./main/analysis"

import type { IRootState, IStoreType } from "./type"

const store = createStore<IRootState>({
  state() {
    return {
      entireDepartment: [],
      entireRole: [],
      entireUserMenus: [],
      entireGoodsList: []
    }
  },
  getters: {},
  mutations: {
    chanegEntireDepartment(state, departmentList: any) {
      state.entireDepartment = departmentList
    },
    chanegEntireRole(state, roleList: any) {
      state.entireRole = roleList
    },
    chanegEntireUserMenus(state, userMenus: any) {
      state.entireUserMenus = userMenus
    },
    chanegEntireGoodsList(state, goodsList: any) {
      state.entireGoodsList = goodsList
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      // 1. 请求部门数据
      const departmentResult = await getPageListData("/department/list", {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = departmentResult.data

      const roleResult = await getPageListData("/role/list", {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = roleResult.data

      const userMenusResult = await getPageListData("/menu/list", {
        offset: 0,
        size: 1000
      })
      const { list: menusList } = userMenusResult.data

      const goodsResult = await getPageListData("/category/list", {
        offset: 0,
        size: 1000
      })
      const { list: goodsList } = goodsResult.data

      // 2. 修改数据
      commit("chanegEntireDepartment", departmentList)
      commit("chanegEntireRole", roleList)
      commit("chanegEntireUserMenus", menusList)
      commit("chanegEntireGoodsList", goodsList)
    }
  },
  modules: {
    login,
    system,
    analysis
  }
})

export function useStore(): Store<IStoreType> {
  return vuexStore()
}

export default store
