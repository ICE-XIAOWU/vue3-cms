import IuceRuequest from "../index"
import type { IAccountType, ILoginResult, IDateType } from "./type"

enum LoginAPI {
  AccountLogin = "/login",
  LoginUserInfo = "/users/", // /user/id
  UserMenus = "/role/" // /role/id/menu
}

//  请求登录
export function accountLoginRequest(account: IAccountType) {
  return IuceRuequest.post<IDateType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

// 请求用户数据
export function requestUserInfoById(id: number) {
  return IuceRuequest.get<IDateType>({
    url: LoginAPI.LoginUserInfo + id
  })
}

// 请求用户菜单数据
export function requestUserMenusByRoleId(id: number) {
  return IuceRuequest.get<IDateType>({
    url: LoginAPI.UserMenus + `${id}/menu`
  })
}
