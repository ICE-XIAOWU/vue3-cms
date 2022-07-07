// import { useStore } from "@/store"
// import { computed, ref } from "vue"
// export function useEchartData(name: string) {
//   const store = useStore()
//   const data: number[] = []
//   const dataAxis: string[] = []
//   let list = ref<any>([])

//   switch (name) {
//     case "top":
//       list = computed(() => store.state.analysis.goodsSaleTop)
//       break
//     case "sale":
//       list = computed(() => store.state.analysis.goodsCategorySale)
//       break
//   }
//   console.log(list.value)
//   for (const item of list) {
//     const name = item.name.slice(0, 2)
//     dataAxis.push(name)
//     data.push(item.saleCount)
//   }

//   return { data, dataAxis }
// }
