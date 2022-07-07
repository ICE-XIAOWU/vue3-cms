import { RouteRecordRaw } from "vue-router"
import { IBreadcrumb } from "@/base-ui/breadcrumb"

let firstMenu: any = null

// 路由映射菜单
export function mapMenusToRoutes(useerMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  // 1. 加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context("../router/main", true, /\.ts/)
  routeFiles.keys().forEach((key) => {
    const route = require("../router/main" + key.split(".")[1])
    allRoutes.push(route.default)
  })
  // 2. 根据菜单获取需要添加的routes
  // userMenus:
  // type === 1 -> children -> type === 1
  // type === 2 -> url -> route

  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => menu.url === route.path)
        if (route) routes.push(route)
        if (!firstMenu) firstMenu = menu
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(useerMenus)

  return routes
}

// 查找面包屑
export function pathMapToBreadcrumb(userMenus: any, currentPath: string) {
  const breadcrumb: IBreadcrumb[] = []
  pathMapToMenu(userMenus, currentPath, breadcrumb)
  return breadcrumb
}

// 映射菜单
export function pathMapToMenu(
  userMenus: any,
  currentPath: string,
  breadcrumb?: IBreadcrumb[]
) {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu: any = pathMapToMenu(menu.children, currentPath)
      if (findMenu) {
        breadcrumb?.push({ name: menu.name })
        breadcrumb?.push({ name: findMenu.name })
        return findMenu
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu
    }
  }
}

// 获取权限
export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _recurseGetPermissions = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _recurseGetPermissions(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }
  _recurseGetPermissions(userMenus)

  return permissions
}

// 获取选中的菜单权限
export function mapMenusToTree(menuList: any) {
  const trees: number[] = []

  const _recurseGetTress = (menus: any) => {
    for (const menu of menus) {
      if (menu.children) {
        _recurseGetTress(menu.children)
      } else {
        trees.push(menu.id)
      }
    }
  }

  _recurseGetTress(menuList)

  return trees
}

export { firstMenu }
