<template>
  <div class="nav-header">
    <div class="left">
      <el-icon v-if="!isIconShow" class="expand" :size="35" @click="menusClick"
        ><Expand
      /></el-icon>
      <el-icon v-else class="expand" :size="35" @click="menusClick"
        ><Fold
      /></el-icon>
      <iuce-breadcrumb :breadcrumb="breadcrumb"></iuce-breadcrumb>
    </div>
    <div class="right">
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-avatar
            shape="circle"
            :size="30"
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            class="avatar"
          />
          <span> {{ userName }}</span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="handleExitClick">
              <el-icon><CircleClose /></el-icon>
              退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue"
import { useRoute, useRouter } from "vue-router"

import { useStore } from "@/store"
import IuceBreadcrumb from "@/base-ui/breadcrumb"
import { pathMapToBreadcrumb } from "@/utils/map-menus"
import LocalCache from "@/utils/cache"

export default defineComponent({
  components: {
    IuceBreadcrumb
  },
  emits: ["menusClick"],
  setup(props, { emit }) {
    const store = useStore()
    const router = useRouter()
    const isIconShow = ref(false)
    const breadcrumb = computed(() => {
      const currentPath = useRoute().path
      const userMenus = store.state.login.userMenus
      return pathMapToBreadcrumb(userMenus, currentPath)
    })

    const userName = computed(() => store.state.login.userInfo.name)

    const menusClick = () => {
      isIconShow.value = !isIconShow.value
      emit("menusClick", isIconShow.value)
    }

    const handleExitClick = () => {
      LocalCache.deleteCache("token")
      router.push("/main")
    }
    return {
      userName,
      breadcrumb,
      isIconShow,
      menusClick,
      handleExitClick
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

  .right {
    .el-dropdown-link {
      display: flex;
      align-items: center;
    }
    .avatar {
      margin-right: 10px;
    }
  }
}
</style>
