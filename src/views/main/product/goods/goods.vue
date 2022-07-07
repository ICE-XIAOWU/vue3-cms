<template>
  <div class="goods">
    <page-search
      :searchFormConfig="searchFormConfigComputed"
      @btnQueryClick="handleQueryClick"
      @btnResetClick="handleResetClick"
    ></page-search>

    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="goods"
      ref="pageContentRef"
      title="新建商品"
      @btn-edit-click="handleEditBtnClick"
      @btn-new-click="handleNewBtnClick"
    >
      <template #image="scoped">
        <el-image
          style="width: 100px; height: 100px"
          :src="scoped.row.imgUrl"
          :preview-src-list="[scoped.row.imgUrl]"
          fit="cover"
          preview-teleported
          hide-on-click-modal
          :alt="scoped.row.name"
        />
      </template>
    </page-content>

    <page-modal
      :modal-config="modalConfigComputed"
      page-name="goods"
      :defaultInfo="defaultInfo"
      ref="pageModalRef"
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
  name: "goods",
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch()

    const [pageModalRef, defaultInfo, handleEditBtnClick, handleNewBtnClick] =
      usePageModal()

    const store = useStore()
    const modalConfigComputed = computed(() => {
      const goods: any = modalConfig.formItems.find((item) => {
        return item.field === "categoryId"
      })
      goods.options = store.state.entireGoodsList.map((item) => {
        return { name: item.name, value: item.id }
      })

      return modalConfig
    })
    const searchFormConfigComputed = computed(() => {
      const searchs: any = searchFormConfig.formItems.find((item) => {
        return item.field === "categoryId"
      })

      searchs.options = store.state.entireGoodsList.map((item) => {
        return { name: item.name, value: item.id }
      })

      return searchFormConfig
    })
    return {
      pageContentRef,
      pageModalRef,
      defaultInfo,
      searchFormConfigComputed,
      modalConfigComputed,
      contentTableConfig,
      handleQueryClick,
      handleResetClick,
      handleEditBtnClick,
      handleNewBtnClick
    }
  }
})
</script>

<style scoped></style>
