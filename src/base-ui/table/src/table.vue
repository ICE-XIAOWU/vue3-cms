<template>
  <div class="table">
    <div class="header">
      <slot name="header">
        <h2 class="title">{{ title }}</h2>
        <div class="handler">
          <slot name="slotHandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listData"
      border
      style="width: 100%"
      @selection-change="handleSelectionClick"
      v-bind="childrenProps"
    >
      <!-- 1. 显示多选框 -->
      <el-table-column
        v-if="showColumnSelection"
        type="selection"
      ></el-table-column>
      <!-- 2. 显示序号 -->
      <el-table-column
        v-if="showColumnIndex"
        label="序号"
        width="60"
        align="center"
        type="index"
      ></el-table-column>
      <!-- 3. 表格内容 -->
      <template v-for="item in propsList" :key="item.prop">
        <el-table-column show-overflow-tooltip v-bind="item" align="center">
          <template #default="scoped">
            <slot :name="item.slotName" :row="scoped.row">
              {{ scoped.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>

    <div class="footer" v-if="showFooter">
      <el-pagination
        :currentPage="page.currentPage"
        :page-size="page.pageSize"
        :page-sizes="[10, 20, 30]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="listCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"

export default defineComponent({
  props: {
    title: {
      type: String,
      default: "xx列表"
    },
    page: {
      type: Object,
      default: () => ({
        currentPage: 0,
        pageSize: 10
      })
    },
    listData: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 0
    },
    propsList: {
      type: Array as PropType<any[]>
    },
    showColumnSelection: {
      type: Boolean,
      default: false
    },
    showColumnIndex: {
      type: Boolean,
      default: false
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["handleSelection", "update:page"],
  setup(props, { emit }) {
    const handleSelectionClick = (payload: any) => {
      emit("handleSelection", payload)
    }

    const handleCurrentChange = (currentPage: number) => {
      emit("update:page", { ...props.page, currentPage })
    }

    const handleSizeChange = (pageSize: number) => {
      emit("update:page", { ...props.page, pageSize })
    }
    return {
      handleSelectionClick,
      handleSizeChange,
      handleCurrentChange
    }
  }
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  padding: 20px 0 30px;
}

.footer {
  display: flex;
  justify-content: end;
  padding: 30px 20px 20px;
}
</style>
