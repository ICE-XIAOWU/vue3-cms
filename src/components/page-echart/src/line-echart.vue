<template>
  <div>
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue"
import BaseEchart from "@/base-ui/base-echart"
import * as echarts from "echarts"

const props = defineProps<{
  dataAxis: string[]
  data: number[]
}>()

const options = computed(() => {
  return {
    tooltip: {
      trigger: "axis"
    },
    title: {
      text: "商品销售总量TOP10"
    },
    xAxis: {},
    yAxis: {
      data: props.dataAxis,
      axisLabel: {
        inside: true,
        color: "#fff"
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },

    series: [
      {
        type: "bar",
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#83bff6" },
            { offset: 0.5, color: "#188df0" },
            { offset: 1, color: "#188df0" }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#2378f7" },
              { offset: 0.7, color: "#2378f7" },
              { offset: 1, color: "#83bff6" }
            ])
          }
        },
        data: props.data
      }
    ]
  }
})
</script>

<style scoped></style>
