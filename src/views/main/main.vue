<template>
  <div class="main">
    <el-container class="main-container">
      <el-aside class="main-aside" :width="isCollapse ? '65px' : '210px'">
        <nav-menu :isCollapse="isCollapse" />
      </el-aside>
      <el-container>
        <el-header class="main-header">
          <nav-header @menus-click="menusClick" />
        </el-header>
        <el-main class="main-content">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import NavMenu from "@/components/nav-menu"
import NavHeader from "@/components/nav-header"

export default defineComponent({
  components: {
    NavMenu,
    NavHeader
  },
  setup() {
    const isCollapse = ref(false)
    const menusClick = (payload: boolean) => {
      isCollapse.value = payload
    }

    return {
      isCollapse,
      menusClick
    }
  }
})
</script>

<style scoped lang="less">
.main {
  height: 100%;

  .main-container {
    height: 100%;

    .main-aside {
      overflow-x: hidden;
      overflow-y: auto;
      line-height: 200px;
      text-align: left;
      cursor: pointer;
      transition: width 0.3s ease-in;
      background-color: #001529;
      scrollbar-width: none;
      -ms-overflow-style: none;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .main-header {
      box-sizing: border-box;
      background-color: #fff;
    }

    .main-content {
      background-color: #f5f5f5;
    }
  }
}
</style>
