<template>
  <div class="goods">
    <page-search
      :searchFormConfig="searchFormConfig"
      @btnQueryClick="handleQueryClick"
      @btnResetClick="handleResetClick"
    ></page-search>

    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="goods"
      ref="pageContentRef"
    >
      <template #handler>
        <el-button type="primary">新建商品</el-button>
      </template>
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

import { usePageSearch } from "@/hooks/usePageSearch"

import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"

import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"

export default defineComponent({
  name: "goods",
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch()

    return {
      pageContentRef,
      searchFormConfig,
      contentTableConfig,
      handleQueryClick,
      handleResetClick
    }
  }
})
</script>

<style scoped></style>
