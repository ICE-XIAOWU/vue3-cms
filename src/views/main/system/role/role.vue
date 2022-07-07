<template>
  <div class="role">
    <page-search
      :searchFormConfig="searchFormConfig"
      @btnQueryClick="handleQueryClick"
      @btnResetClick="handleResetClick"
    ></page-search>
    <page-content
      :contentTableConfig="contentTableConfig"
      pageName="role"
      ref="pageContentRef"
      @btn-edit-click="handleEditData"
      @btn-new-click="handleNewData"
      title="新建角色"
    >
    </page-content>
    <page-modal
      :modalConfig="modalConfig"
      pageName="role"
      :defaultInfo="defaultInfo"
      :otherInfo="otherInfo"
      ref="pageModalRef"
    >
      <el-tree
        :data="menusTreeList"
        :props="{ label: 'name', children: 'children' }"
        node-key="id"
        show-checkbox
        @check="handleCheckChange"
        ref="elTreeRef"
      />
    </page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from "vue"
import { useStore } from "@/store"

import { usePageSearch } from "@/hooks/usePageSearch"
import { usePageModal } from "@/hooks/usePageModal"
import { mapMenusToTree } from "@/utils/map-menus"

import PageSearch from "@/components/page-search"
import PageContent from "@/components/page-content"
import PageModal from "@/components/page-modal"
import { searchFormConfig } from "./config/search.config"
import { contentTableConfig } from "./config/content.config"
import { modalConfig } from "./config/modal.config"
import { ElTree } from "element-plus"

export default defineComponent({
  name: "role",
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const store = useStore()
    const [pageContentRef, handleQueryClick, handleResetClick] = usePageSearch()
    const elTreeRef = ref<InstanceType<typeof ElTree>>()

    const editCallback = (item: any) => {
      const result = mapMenusToTree(item.menuList)
      nextTick(() => {
        elTreeRef.value?.setCheckedKeys(result, false)
      })
    }

    const [pageModalRef, defaultInfo, handleEditData, handleNewData] =
      usePageModal(undefined, editCallback)
    const otherInfo = ref({})
    const menusTreeList = computed(() => store.state.entireUserMenus)

    const handleCheckChange = (data1: any, data2: any) => {
      const menuList = [...data2.halfCheckedKeys, ...data2.checkedKeys]
      otherInfo.value = { menuList }
    }

    return {
      pageContentRef,
      pageModalRef,
      elTreeRef,
      searchFormConfig,
      modalConfig,
      defaultInfo,
      otherInfo,
      contentTableConfig,
      menusTreeList,
      handleQueryClick,
      handleResetClick,
      handleEditData,
      handleNewData,
      handleCheckChange
    }
  }
})
</script>

<style scoped></style>
