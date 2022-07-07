<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <slot name="header">
          <span class="title">{{ title }}</span>
        </slot>
      </template>
      <slot></slot>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "默认标题"
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.title {
  font-size: 16px;
  font-weight: 600;
}
</style>
