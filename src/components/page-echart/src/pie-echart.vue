<template>
  <div>
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from "vue"
import BaseEchart from "@/base-ui/base-echart"
import { IDataType } from "../types"

const props = defineProps<{
  data: IDataType[]
}>()

const options = computed(() => {
  return {
    title: {
      text: "分类商品数量"
    },

    tooltip: {
      trigger: "item"
    },
    series: [
      {
        type: "pie",
        radius: "50%",
        data: props.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  }
})
</script>

<style scoped></style>
