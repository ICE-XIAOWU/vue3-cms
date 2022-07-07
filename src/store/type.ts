import { ILoginState } from "./login/type"
import { ISystemType, IAnalysisType } from "./main/type"

export interface IRootState {
  entireDepartment: any[]
  entireRole: any[]
  entireUserMenus: any[]
  entireGoodsList: any[]
}

export interface IRootWithModule {
  login: ILoginState
  system: ISystemType
  analysis: IAnalysisType
}

export type IStoreType = IRootState & IRootWithModule
