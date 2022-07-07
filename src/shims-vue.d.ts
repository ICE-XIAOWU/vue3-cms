/* eslint-disable */
declare module "*.vue" {
  import type { DefineComponent } from "vue"
  const component: DefineComponent<{}, {}, any>
  export interface ComponentCustomProperties {
    $filters: any
  }
  export default component
}

declare module "*.json"
// 全局属性
// declare module "@vue/runtime-core" {
//   interface ComponentCustomProperties {
//     $filters: any
//   }
// }
