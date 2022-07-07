import { createRouter, createWebHashHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import LocalCache from "@/utils/cache"
import { firstMenu } from "@/utils/map-menus"
import store from "@/store/index"

const routes: RouteRecordRaw[] = [
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login/login.vue")
  },
  {
    name: "main",
    path: "/main",
    component: () => import("@/views/main/main.vue")
  },
  {
    name: "not-found",
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/not-found/not-found.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  const token = LocalCache.getCache("token")
  if (to.path !== "/login") {
    if (!token) {
      return "/login"
    }
  }

  if (to.path === "/main") {
    return firstMenu.url
  }

  if (to.path === "/") {
    return "/main"
  }
})

// 给vuex赋值
export function setupStore() {
  store.dispatch("login/loadLocalLogin")
  store.dispatch("analysis/getDashboardDataAction")
}
export default router
