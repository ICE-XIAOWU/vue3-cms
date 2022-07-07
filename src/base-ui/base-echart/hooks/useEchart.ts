import * as echarts from "echarts"
import chinaMapData from "../data/china.json"

// 注册地图
echarts.registerMap("china", chinaMapData)

export default function useEchart(el: HTMLElement) {
  const echartInstance = echarts.init(el)

  // 设置options
  const setOptions = (options: echarts.EChartsCoreOption) => {
    echartInstance.setOption(options)
  }

  // 监听网页变化
  window.addEventListener("resize", () => {
    echartInstance.resize()
  })

  // 更新echart
  const updateSize = () => {
    echartInstance.resize()
  }

  return {
    echartInstance,
    setOptions,
    updateSize
  }
}
