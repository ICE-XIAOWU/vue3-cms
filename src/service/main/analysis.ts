import IuceRequest from "../index"
import type { IDateType } from "../types"

enum goodsAPI {
  goodsCategoryCount = "/goods/category/count",
  goodsCategorySale = "/goods/category/sale",
  goodsCategoryFavor = "/goods/category/favor",
  goodsSaleTop = "/goods/sale/top10",
  goodsAddressSale = "/goods/address/sale",
  goodsAmountList = "/goods/amount/list"
}

export function getGoodsCategoryCount() {
  return IuceRequest.get<IDateType>({
    url: goodsAPI.goodsCategoryCount,
    showloading: false
  })
}

export function getGoodsCategorySale() {
  return IuceRequest.get<IDateType>({
    url: goodsAPI.goodsCategorySale,
    showloading: false
  })
}

export function getGoodsCategoryFavor() {
  return IuceRequest.get<IDateType>({
    url: goodsAPI.goodsCategoryFavor,

    showloading: false
  })
}

export function getGoodsSaleTop() {
  return IuceRequest.get<IDateType>({
    url: goodsAPI.goodsSaleTop,
    showloading: false
  })
}

export function getGoodsAddressSale() {
  return IuceRequest.get<IDateType>({
    url: goodsAPI.goodsAddressSale,
    showloading: false
  })
}

export function getGoodsAmountList() {
  return IuceRequest.get<IDateType>({
    url: goodsAPI.goodsAmountList,
    showloading: false
  })
}
