<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="" />
      <span v-if="!isCollapse">IUCE_CMS</span>
    </div>
    <el-menu
      :collapse="isCollapse"
      :default-active="currentMenuActive"
      background-color="#0c2135"
      text-color="#b7bdc3"
      active-text-color="#0a60bd"
      collapse-transition
    >
      <template v-for="item in userMenus" :key="item.id">
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <template v-if="item.icon === 'el-icon-monitor'">
                <el-icon><Monitor /></el-icon
              ></template>
              <template v-if="item.icon === 'el-icon-setting'">
                <el-icon><Setting /></el-icon
              ></template>
              <template v-if="item.icon === 'el-icon-goods'">
                <el-icon><Goods /></el-icon
              ></template>
              <template v-if="item.icon === 'el-icon-chat-line-round'">
                <el-icon><ChatLineRound /></el-icon
              ></template>
              <span v-if="!isCollapse">{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
                >{{ subitem.name }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''"> {{ item.name }} </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue"
import { useStore } from "@/store/index"
import { useRouter } from "vue-router"
import { useRoute } from "vue-router"

import { pathMapToMenu } from "@/utils/map-menus"

export default defineComponent({
  props: {
    isCollapse: {
      type: Boolean
    }
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const store = useStore()
    const userMenus = computed(() => store.state.login.userMenus)

    const menu = pathMapToMenu(userMenus.value, route.path)
    const currentMenuActive = ref(menu.id + "")

    const handleMenuItemClick = (item: any) => {
      router.push({
        path: item.url ?? "/not-found"
      })
    }
    return {
      userMenus,
      currentMenuActive,
      handleMenuItemClick
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  .logo {
    display: flex;
    align-items: center;
    padding: 20px;
    line-height: 0;
    color: #fff;

    img {
      width: 30px;
      height: 30px;
      margin-right: 8px;
    }

    span {
      font-size: 24px;
      font-weight: 700;
    }
  }
  .el-menu {
    border: none;
  }
  .el-menu-item {
    background-color: rgb(14, 24, 41);

    &:hover {
      background-color: #2654af;
    }
  }
  .el-menu-item.is-active {
    background-color: #2654af;
    color: #fff;
  }
}
</style>
