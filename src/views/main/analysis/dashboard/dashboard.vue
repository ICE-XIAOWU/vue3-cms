<template>
  <div class="dashboard">
    <el-row :gutter="10" class="el-row-top">
      <template v-for="item in amountList" :key="item.amount">
        <el-col :span="6">
          <icue-card2 :item="item"> </icue-card2>
        </el-col>
      </template>
    </el-row>

    <el-row :gutter="10">
      <el-col :span="8">
        <icue-card title="分类商品数量">
          <pie-echart :data="goodsCounts"></pie-echart>
        </icue-card>
      </el-col>
      <el-col :span="8">
        <icue-card title="分类商品用户收藏总量">
          <bar-echart v-bind="goodFavors"></bar-echart>
        </icue-card>
      </el-col>
      <el-col :span="8">
        <icue-card title="销售量TOP10">
          <line-echart v-bind="goodsTops"></line-echart>
        </icue-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="el-row-button">
      <el-col :span="12">
        <icue-card title="分类商品销售总量">
          <line-echart2 v-bind="goodsSales"></line-echart2>
        </icue-card>
      </el-col>
      <el-col :span="12">
        <icue-card title="全国地方销售总量">
          <map-echart :mapData="mapList"></map-echart>
        </icue-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"

import IcueCard from "@/base-ui/card"
import IcueCard2 from "@/base-ui/card2"
import {
  PieEchart,
  LineEchart,
  LineEchart2,
  BarEchart,
  MapEchart
} from "@/components/page-echart"

// import { useEchartData } from "./hooks/useEchartData"

export default defineComponent({
  name: "dashboard",
  components: {
    IcueCard,
    IcueCard2,
    PieEchart,
    LineEchart,
    LineEchart2,
    BarEchart,
    MapEchart
  },
  setup() {
    const store = useStore()
    store.dispatch("analysis/getDashboardDataAction")

    const amountList = computed(() => store.state.analysis.goodsAmountList)

    const goodsCounts = computed(() => {
      return store.state.analysis.goodsCategoryCount.map((item) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    const goodsTops = computed(() => {
      const data: number[] = []
      const dataAxis: string[] = []
      const tops = store.state.analysis.goodsSaleTop
      for (const item of tops) {
        // const length = item.name.length - 2
        const name = item.name.slice(0, 2)
        dataAxis.push(name)
        data.push(item.saleCount)
      }

      return { data, dataAxis }
    })

    const goodsSales = computed(() => {
      const data: number[] = []
      const dataAxis: string[] = []
      const tops = store.state.analysis.goodsCategorySale
      for (const item of tops) {
        // const length = item.name.length - 2
        const name = item.name.slice(0, 2)
        dataAxis.push(name)
        data.push(item.goodsCount)
      }
      return { data, dataAxis }
    })

    const goodFavors = computed(() => {
      const data: number[] = []
      const dataAxis: string[] = []
      const tops = store.state.analysis.goodsCategoryFavor
      for (const item of tops) {
        // const length = item.name.length - 2
        // const name = item.goodsFavor.slice(0, 2)
        dataAxis.push(item.name)
        data.push(item.goodsFavor)
      }
      return { data, dataAxis }
    })

    const mapList = computed(() => {
      return store.state.analysis.goodsAddressSale.map((item) => {
        return { name: item.address, value: item.count }
      })
    })
    return {
      goodsCounts,
      goodsTops,
      goodsSales,
      goodFavors,
      mapList,
      amountList
    }
  }
})
</script>

<style scoped>
.dashboard {
  background-color: #f5f5f5;
}
.el-row-top {
  margin-bottom: 20px;
}
.el-row-button {
  margin-top: 20px;
}
</style>
