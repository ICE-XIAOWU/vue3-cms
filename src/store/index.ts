import { createStore, useStore as vuexStore } from "vuex"
import { Store } from "vuex"

import login from "./login/login"

import type { IRootState, IStoreType } from "./type"

const store = createStore<IRootState>({
  state() {
    return {
      name: "store",
      age: 19
    }
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function useStore(): Store<IStoreType> {
  return vuexStore()
}

export default store
