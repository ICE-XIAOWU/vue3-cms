import { Module } from "vuex"
import { ISystemType } from "./type"
import { IRootState } from "../type"
import {
  getPageListData,
  deletePageData,
  createPageData,
  editPageData
} from "@/service/main/system"

const systemModule: Module<ISystemType, IRootState> = {
  namespaced: true,
  state() {
    return {
      queryInfo: {},
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0,
      departmentList: [],
      departmentCount: 0,
      categoryList: [],
      categoryCount: 0
    }
  },
  getters: {
    getPageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
        // switch (pageName) {
        //   case "users":
        //     return state.usersList
        //   case "role":
        //     return state.roleList
        // }
      }
    },
    getPageCountData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },
  mutations: {
    changeQueryInfo(state, queryInfo: any) {
      state.queryInfo = queryInfo
    },
    changeUsersList(state, usersList: any) {
      state.usersList = usersList
    },
    changeUsersCount(state, usersCount: any) {
      state.usersCount = usersCount
    },
    changeRoleList(state, roleList: any) {
      state.roleList = roleList
    },
    changeRoleCount(state, roleCount: any) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodsList: any) {
      state.goodsList = goodsList
    },
    changeGoodsCount(state, goodsCount: any) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menuList: any) {
      state.menuList = menuList
    },
    changeMenuCount(state, menuCount: any) {
      state.menuCount = menuCount
    },
    changeDepartmentList(state, dapartmentList: any) {
      state.departmentList = dapartmentList
    },
    changeDepartmentCount(state, departmentCount: any) {
      state.departmentCount = departmentCount
    },
    changeCategoryList(state, categoryList: any) {
      state.categoryList = categoryList
    },
    changeCategoryCount(state, categoryCount: any) {
      state.categoryCount = categoryCount
    }
  },
  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1. 获取url
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`
      // let pageUrl = ""
      // switch (pageName) {
      //   case "users":
      //     pageUrl = "/users/list"
      //     break
      //   case "role":
      //     pageUrl = "/role/list"
      //     break
      // }
      // 2. 发送页面请求
      const { list, totalCount } = (
        await getPageListData(pageUrl, payload.queryInfo)
      ).data
      console.log(list)
      // 3. 修改数据
      const newPageName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${newPageName}List`, list)
      commit(`change${newPageName}Count`, totalCount)
      // switch (pageName) {
      //   case "user":
      //     commit("changeUsersList", list)
      //     commit("changeUsersCount", totalCount)
      //     break
      //   case "role":
      //     commit("changeRoleList", list)
      //     commit("changeRoleCount", totalCount)
      //     break
      // }
    },

    async deletePageDataAction({ dispatch, state }, payload: any) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      // 2. 发送删除网络请求
      await deletePageData(pageUrl)

      // 3. 重新发送网络数据
      dispatch("getPageListAction", {
        pageName,
        queryInfo: state.queryInfo
      })
    },

    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      const result = await createPageData(pageUrl, newData)
      console.log(result)
      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },

    async editPageDataAction({ dispatch }, payload: any) {
      const { pageName, id, editData } = payload
      const pageUrl = `/${pageName}/${id}`

      await editPageData(pageUrl, editData)

      dispatch("getPageListAction", {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}

export default systemModule
