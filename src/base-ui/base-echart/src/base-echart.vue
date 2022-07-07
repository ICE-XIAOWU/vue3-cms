<template>
  <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from "vue"

import useEchart from "../hooks/useEchart"

import { EChartsCoreOption } from "echarts"

const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    options: EChartsCoreOption
  }>(),
  {
    width: "100%",
    height: "500px",
    options: () => ({})
  }
)

const echartDivRef = ref<HTMLElement>()

onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>

<style lang="less" scoped></style>
