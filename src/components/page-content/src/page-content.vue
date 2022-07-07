<template>
  <div class="page-content">
    <iuce-table
      v-bind="contentTableConfig"
      :listData="dataList"
      :listCount="dataCount"
      v-model:page="pageInfo"
      @handle-selection="handleSelectionClick"
      @update:page="handlePageClick"
    >
      <!-- 1. 头部插槽 -->
      <template #slotHandler v-if="isCreate">
        <el-button
          v-if="pageName !== 'menu'"
          type="primary"
          @click="handleNewBtnClick"
        >
          {{ title }}
        </el-button>
      </template>

      <!-- 2. 表格的插槽 -- 固定 -->
      <template #status="scoped">
        <el-button
          plain
          v-if="scoped.row.enable === 1"
          type="success"
          size="small"
        >
          启用
        </el-button>
        <el-button plain v-else type="danger" size="small"> 禁用</el-button>
      </template>

      <template #createAt="scoped">
        <span>{{ $filters.formatTime(scoped.row.createAt) }}</span>
      </template>

      <template #updateAt="scoped">
        <span>{{ $filters.formatTime(scoped.row.updateAt) }}</span>
      </template>

      <template #operate="scoped" v-if="isDelete && isUpdate">
        <el-button
          text
          size="small"
          type="primary"
          v-if="isUpdate"
          @click="handleEditBtnClick(scoped.row)"
        >
          <el-icon>
            <Edit />
          </el-icon>
          <span>编辑</span>
        </el-button>
        <el-button
          text
          size="small"
          type="danger"
          v-if="isDelete"
          @click="handleDeleteClick(scoped.row)"
        >
          <el-icon>
            <Delete />
          </el-icon>
          <span>删除</span>
        </el-button>
      </template>

      <!-- 3. 表格插槽 - 动态 -->
      <template
        v-for="item in otherSlots"
        :key="item.prop"
        #[item.slotName]="scoped"
      >
        <template v-if="item.slotName">
          <slot :name="item.slotName" :row="scoped.row"></slot>
        </template>
      </template>
    </iuce-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue"

import { useStore } from "@/store"
import usePermission from "@/hooks/usePermissions"

import IuceTable from "@/base-ui/table"

export default defineComponent({
  props: {
    pageName: {
      type: String,
      required: true
    },
    contentTableConfig: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      default: "新建用户"
    }
  },
  components: {
    IuceTable
  },
  emits: ["btnNewClick", "btnEditClick"],
  setup(props, { emit }) {
    const store = useStore()

    // 0. 获取用户权限
    const isCreate = usePermission(props.pageName, "create")
    const isUpdate = usePermission(props.pageName, "update")
    const isDelete = usePermission(props.pageName, "delete")
    const isQuery = usePermission(props.pageName, "query")

    // 1. 获取分页数据
    const pageInfo = ref({
      currentPage: 1,
      pageSize: 10
    })
    const handlePageClick = () => {
      getPageData()
    }

    // 2. 发送网络请求
    function getPageData(queryInfo: any = {}) {
      if (!isQuery) return
      store.dispatch("system/getPageListAction", {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageData()

    // 3. 获取数据
    const dataList = computed(() => {
      return store.getters[`system/getPageListData`](props.pageName)
    })
    const dataCount = computed(() =>
      store.getters[`system/getPageCountData`](props.pageName)
    )

    // 4. 动态插槽
    const otherSlots = props.contentTableConfig?.propsList.filter(
      (item: any) => {
        if (item.slotName === "status") return false
        if (item.slotName === "createAt") return false
        if (item.slotName === "updateAt") return false
        if (item.slotName === "operate") return false
        return item
      }
    )

    // 5. 删除/编辑/新建
    const handleDeleteClick = (item: any) => {
      store.dispatch("system/deletePageDataAction", {
        pageName: props.pageName,
        id: item.id
      })
    }

    const handleNewBtnClick = () => {
      emit("btnNewClick")
    }

    const handleEditBtnClick = (item: any) => {
      emit("btnEditClick", item)
    }

    const handleSelectionClick = (payload: any) => {
      console.log(payload)
      console.log("勾选列")
    }
    return {
      dataList,
      dataCount,
      pageInfo,
      otherSlots,
      isCreate,
      isUpdate,
      isDelete,
      handleSelectionClick,
      handlePageClick,
      handleDeleteClick,
      handleNewBtnClick,
      handleEditBtnClick,
      getPageData
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
