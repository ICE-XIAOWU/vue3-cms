import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import LocalCache from "@/utils/cache"
import store from "@/store/index"

import user from "@/views/main/system/user/user.vue"
// import role from ""

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    name: "login",
    path: "/login",
    component: () => import("@/views/login/login.vue")
  },
  {
    name: "main",
    path: "/main",
    component: () => import("@/views/main/main.vue"),
    children: [
      {
        name: "user",
        path: "/main/system/user",
        component: () => import("@/views/main/system/user/user.vue")
      },
      {
        name: "role",
        path: "/main/system/role",
        component: () => import("@/views/main/system/role/role.vue")
      }
    ]
  },
  {
    name: "not-found",
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/not-found/not-found.vue")
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to) => {
  const token = LocalCache.getCache("token")
  if (to.path !== "/login") {
    if (!token) {
      return "/login"
    }
  } else {
    if (token) {
      return "/main"
    }
  }
})

// 给vuex赋值
export function setupStore() {
  store.dispatch("login/loadLocalLogin")
}
export default router
