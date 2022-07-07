<template>
  <div class="page-modal">
    <el-dialog
      v-model="centerDialogVisible"
      width="30%"
      center
      :destroy-on-close="true"
    >
      <iuce-form v-bind="modalConfig" v-model="formData">
        <template #header>
          <h2>操作数据</h2>
        </template>
        <template #footer></template>
      </iuce-form>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleModalClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue"
import { useStore } from "@/store"
import IuceForm from "@/base-ui/form"

export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      required: true
    },
    otherInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    IuceForm
  },
  setup(props) {
    const centerDialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[item.field]
        }
      }
    )

    const store = useStore()
    const handleModalClick = () => {
      if (Object.keys(props.defaultInfo).length !== 0) {
        store.dispatch("system/editPageDataAction", {
          pageName: props.pageName,
          id: props.defaultInfo.id,
          editData: { ...formData.value, ...props.otherInfo }
        })
        centerDialogVisible.value = false
      } else {
        store.dispatch("system/createPageDataAction", {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo }
        })
        centerDialogVisible.value = false
      }
    }

    return {
      centerDialogVisible,
      formData,
      handleModalClick
    }
  }
})
</script>

<style scoped></style>
