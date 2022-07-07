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
        text: "分类商品用户收藏量"
      }
    ],
    polar: {
      radius: [30, "80%"]
    },
    angleAxis: {
      max: 30000,
      startAngle: 75
    },
    radiusAxis: {
      type: "category",
      data: props.dataAxis
    },
    tooltip: {},
    series: {
      type: "bar",
      data: props.data,
      coordinateSystem: "polar"
    }
  }
})
</script>

<style scoped></style>
