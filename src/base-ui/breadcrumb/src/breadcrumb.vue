<template>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in breadcrumb" :key="item.name">{{
        item.name
      }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { IBreadcrumb } from "../types"

export default defineComponent({
  props: {
    breadcrumb: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.breadcrumb {
  margin-left: 10px;
}
</style>
