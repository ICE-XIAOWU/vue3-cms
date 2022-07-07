import { Module } from "vuex"
import { IRootState } from "../type"
import { IAnalysisType } from "./type"

import {
  getGoodsCategoryCount,
  getGoodsCategorySale,
  getGoodsCategoryFavor,
  getGoodsAddressSale,
  getGoodsAmountList,
  getGoodsSaleTop
} from "@/service/main/analysis"

const analysisModule: Module<IAnalysisType, IRootState> = {
  namespaced: true,
  state() {
    return {
      goodsCategoryCount: [],
      goodsCategorySale: [],
      goodsCategoryFavor: [],
      goodsAddressSale: [],
      goodsSaleTop: [],
      goodsAmountList: []
    }
  },
  mutations: {
    changeGoodsCategoryCount(state, list) {
      state.goodsCategoryCount = list
    },
    changeGoodsCategorySale(state, list) {
      state.goodsCategorySale = list
    },
    changeGoodsCategoryFavor(state, list) {
      state.goodsCategoryFavor = list
    },
    changeGoodsAddressSale(state, list) {
      state.goodsAddressSale = list
    },
    changeGoodsSaleTop(state, list) {
      state.goodsSaleTop = list
    },
    changeGoodsAmountList(state, list) {
      state.goodsAmountList = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const goodsCategoryCountResult = await getGoodsCategoryCount()
      commit("changeGoodsCategoryCount", goodsCategoryCountResult.data)
      const goodsCategorySaleResult = await getGoodsCategorySale()
      commit("changeGoodsCategorySale", goodsCategorySaleResult.data)
      const goodsCategoryFavorResult = await getGoodsCategoryFavor()
      commit("changeGoodsCategoryFavor", goodsCategoryFavorResult.data)
      const goodsAddressSaleResult = await getGoodsAddressSale()
      commit("changeGoodsAddressSale", goodsAddressSaleResult.data)
      const goodsSaleTopResult = await getGoodsSaleTop()
      commit("changeGoodsSaleTop", goodsSaleTopResult.data)
      const goodsAmountListResult = await getGoodsAmountList()
      commit("changeGoodsAmountList", goodsAmountListResult.data)
    }
  }
}

export default analysisModule
