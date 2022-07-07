<template>
  <div class="page-search">
    <iuce-form v-bind="searchFormConfig" v-model="formData">
      <template #header>
        <h1>高级检索</h1>
      </template>

      <template #footer>
        <el-button @click="handleResetClick">
          <el-icon><Refresh /></el-icon>
          <span>重置</span>
        </el-button>
        <el-button type="primary" @click="handleQueryClick">
          <el-icon><Search /></el-icon>
          <span>搜索</span>
        </el-button>
      </template>
    </iuce-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import IuceForm from "@/base-ui/form"

export default defineComponent({
  props: {
    searchFormConfig: {
      type: Object,
      required: true
    }
  },
  components: {
    IuceForm
  },
  emits: ["btnResetClick", "btnQueryClick"],
  setup(props, { emit }) {
    const formItems = props.searchFormConfig?.formItems ?? []
    const formOriginData: any = {}
    for (const item of formItems) {
      formOriginData[item.field] = ""
    }
    const formData = ref(formOriginData)

    const handleResetClick = () => {
      for (const key in formOriginData) {
        formData.value[key] = formOriginData[key]
      }

      emit("btnResetClick")
    }

    const handleQueryClick = () => {
      emit("btnQueryClick", formData.value)
    }
    return {
      formData,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped></style>
