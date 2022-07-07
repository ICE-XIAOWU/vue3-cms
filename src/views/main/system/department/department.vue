<template>
  <div class="department">
    <page-search
      :searchFormConfig="searchFormConfig"
      @btn-query-click="handleQueryClick"
      @btn-reset-click="handleResetClick"
    ></page-search>

    <page-content
      :content-table-config="contentTableConfig"
      page-name="department"
      title="新建部门"
      @btnEditClick="handleEditBtnClick"
      @btnNewClick="handleNewBtnClick"
      ref="pageContentRef"
    >
    </page-content>

    <page-modal
      :modal-config="modalConfigComputed"
      :default-info="defaultInfo"
      page-name="department"
      ref="pageModalRef"
    ></page-modal>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue"
import { useStore } from "@/store"
import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import PageModal from "@/components/page-modal"
import { contentTableConfig } from "./config/content.config"
import { searchFormConfig } from "./config/search.config"
import { modalConfig } from "./config/modal.config"
import { usePageModal } from "@/hooks/usePageModal"
import { usePageSearch } from "@/hooks/usePageSearch"

const store = useStore()
const modalConfigComputed = computed(() => {
  const departmentConfig: any = modalConfig.formItems.find((item) => {
    return item.field === "parentId"
  })
  departmentConfig.options = store.state.entireDepartment.map((item) => {
    return {
      name: item.name,
      value: item.id
    }
  })
  return modalConfig
})

const [pageModalRef, defaultInfo, handleEditBtnClick, handleNewBtnClick] =
  usePageModal()

const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch()
</script>

<style scoped></style>
