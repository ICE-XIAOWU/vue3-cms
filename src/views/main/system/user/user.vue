<template>
  <div class="user">
    <page-search
      :searchFormConfig="searchFormConfig"
      @btnQueryClick="handleQueryClick"
      @btnResetClick="handleResetClick"
    />
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="users"
      ref="pageContentRef"
      @btnEditClick="handleEditData"
      @btnNewClick="handleNewData"
    >
      <template #handler>
        <el-button type="primary">新建用户</el-button>
        <el-button type="danger">删除用户</el-button>
      </template>
    </page-content>
    <page-modal
      :modalConfig="modalConfigComputed"
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      pageName="users"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
import { useStore } from "@/store"

import { usePageSearch } from "@/hooks/usePageSearch"
import { usePageModal } from "@/hooks/usePageModal"

import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import PageModal from "@/components/page-modal"

import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalConfig } from "./config/modal.config"
export default defineComponent({
  name: "user",
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch()
    // 1. 控制是否显示密码选项
    const newCallback = () => {
      const passwordConfig = modalConfig.formItems.find(
        (item) => item.field === "password"
      )
      passwordConfig!.isHidden = false
    }
    const editCallback = () => {
      const passwordConfig = modalConfig.formItems.find(
        (item) => item.field === "password"
      )
      passwordConfig!.isHidden = true
    }

    // 2. 动态显示部门、权限
    const store = useStore()
    const modalConfigComputed = computed(() => {
      const departmentConfig = modalConfig.formItems.find((item) => {
        return item.field === "departmentId"
      })
      departmentConfig!.options = store.state.entireDepartment.map((item) => {
        return {
          name: item.name,
          value: item.id
        }
      })

      const roleConfig = modalConfig.formItems.find((item) => {
        return item.field === "roleId"
      })
      roleConfig!.options = store.state.entireRole.map((item) => {
        return {
          name: item.name,
          value: item.id
        }
      })

      return modalConfig
    })

    // 3. 调用相关hook
    const [pageModalRef, defaultInfo, handleEditData, handleNewData] =
      usePageModal(newCallback, editCallback)

    return {
      pageContentRef,
      pageModalRef,
      searchFormConfig,
      contentTableConfig,
      modalConfigComputed,
      defaultInfo,
      handleQueryClick,
      handleResetClick,
      handleEditData,
      handleNewData
    }
  }
})
</script>

<style scoped></style>
