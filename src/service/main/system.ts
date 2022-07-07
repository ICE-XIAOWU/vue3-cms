import IuceRuequest from "../index"
import type { IDateType } from "../types"

export function getPageListData(url: string, queryInfo: any) {
  return IuceRuequest.post<IDateType>({
    url,
    data: queryInfo
  })
}

export function deletePageData(url: string) {
  return IuceRuequest.delete<IDateType>({
    url,
    showloading: false
  })
}

export function createPageData(url: string, newData: any) {
  return IuceRuequest.post<IDateType>({
    url,
    data: newData,
    showloading: false
  })
}

export function editPageData(url: string, editData: any) {
  return IuceRuequest.patch<IDateType>({
    url,
    data: editData,
    showloading: false
  })
}
