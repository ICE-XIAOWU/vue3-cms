<template>
  <div class="nav-header">
    <div class="left">
      <el-icon v-if="!isIconShow" class="expand" :size="35" @click="menusClick"
        ><Expand
      /></el-icon>
      <el-icon v-else class="expand" :size="35" @click="menusClick"
        ><Fold
      /></el-icon>
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  emits: ["menusClick"],
  setup(props, { emit }) {
    const isIconShow = ref(false)

    const menusClick = () => {
      isIconShow.value = !isIconShow.value
      emit("menusClick", isIconShow.value)
    }
    return {
      isIconShow,
      menusClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .left {
    display: flex;
    align-items: center;

    .expand {
      cursor: pointer;
    }
    .breadcrumb {
      margin-left: 10px;
    }
  }
}
</style>
