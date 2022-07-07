<template>
  <div>
    <el-card class="box-card">
      <template #header>
        <slot name="header">
          <span>{{ title }}</span>
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

<style scoped></style>
