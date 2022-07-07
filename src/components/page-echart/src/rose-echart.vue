<template>
  <div>
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue"
import BaseEchart from "@/base-ui/base-echart"
import { IDataType } from "../types"

const props = defineProps<{
  data: IDataType[]
}>()

const options = computed(() => {
  return {
    tooltip: {
      trigger: "item"
    },
    series: [
      {
        type: "pie",
        radius: [50, 150],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8
        },
        data: props.data
      }
    ]
  }
})
</script>

<style scoped></style>
