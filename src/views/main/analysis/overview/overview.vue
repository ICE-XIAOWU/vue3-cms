<template>
  <div class="overview">
    <iuce-card title="关于"
      >Vue3Admin 是基于 Vue3、Vuex、VueRouter、Vite、 ElementPlus
      、TypeScript、Echart5 等后台系统解决方案。
    </iuce-card>

    <iuce-card class="jishu" title="技术栈">
      <ul>
        <li v-for="item in items" :key="item.name" class="item">
          <span>{{ item.name }}: </span>
          <el-link type="primary"> {{ " " + item.value }}</el-link>
        </li>
      </ul>
    </iuce-card>
  </div>
</template>

<script lang="ts" setup>
import IuceCard from "@/base-ui/card"

const items = [
  { name: "开发工具", value: "Visual Studio Code" },
  { name: "编程语言", value: "TypeScript 4.x + JavaScript" },
  { name: "构建工具", value: "Webpack5.x" },
  { name: "前端框架", value: "Vue3.x" },
  { name: "路由工具", value: "Vue Router 4.x" },
  { name: "状态管理", value: "Vuex 4.x" },
  { name: "UI框架", value: "Element Plus" },
  { name: "可视化", value: "Echart5.x" }
]
</script>

<style scoped>
.overview {
  background-color: #f5f5f5;
}
.jishu {
  margin-top: 20px;
}
.item {
  font-size: 16px;
  margin-bottom: 20px;
}
</style>
