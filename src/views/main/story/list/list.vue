<template>
  <div class="list">
    <PageSearch
      :search-form-config="searchFormConfig"
      @btn-query-click="handleQueryClick"
      @btn-reset-click="handleResetClick"
    ></PageSearch>

    <page-content
      :content-table-config="contentTableConfig"
      page-name="list"
      ref="pageContentRef"
      @btn-edit-click="handleEditBtnClick"
      @btn-new-click="handleNewBtnClick"
    ></page-content>

    <page-modal
      page-name="list"
      ref="pageModalRef"
      :default-info="defaultInfo"
      :modal-config="modalConfig"
    ></page-modal>
  </div>
</template>

<script lang="ts" setup>
import { usePageSearch } from "@/hooks/usePageSearch"
import { usePageModal } from "@/hooks/usePageModal"

import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import PageModal from "@/components/page-modal"

import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalConfig } from "./config/modal.config"

const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch()

const [pageModalRef, defaultInfo, handleEditBtnClick, handleNewBtnClick] =
  usePageModal()
</script>

<style scoped></style>
