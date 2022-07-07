<template>
  <div>
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue"
import BaseEchart from "@/base-ui/base-echart"

const props = defineProps<{
  dataAxis: string[]
  data: number[]
}>()

const options = computed(() => {
  return {
    title: [
      {
        text: "分类商品销售总量"
      }
    ],
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: props.dataAxis
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: props.data,
        type: "line",
        areaStyle: {},
        itemStyle: {
          color: "#e97671"
        }
      }
    ]
  }
})
</script>

<style scoped></style>
