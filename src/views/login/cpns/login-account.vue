<template>
  <div class="login-account">
    <el-form
      label-width="60px"
      :model="account"
      :rules="rules"
      :hide-required-asterisk="false"
      ref="formRef"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" show-password v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { useStore } from "vuex"
import LocalCache from "@/utils/cache"
import { ElForm } from "element-plus"

import { rules } from "../config/account-rules-config"

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: LocalCache.getCache("name") ?? "coderwhy",
      password: LocalCache.getCache("password") ?? "123456"
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = (isKeepPassword: boolean) => {
      formRef.value?.validate((valid) => {
        if (valid) {
          // 1. 记住密码与删除密码操作
          if (isKeepPassword) {
            LocalCache.setCache("name", account.name)
            LocalCache.setCache("password", account.password)
          } else {
            LocalCache.deleteCache("name")
            LocalCache.deleteCache("password")
          }

          store.dispatch("login/accountLoginAction", { ...account })
        }
      })
    }

    return {
      formRef,
      account,
      rules,
      loginAction
    }
  }
})
</script>

<style scoped lang="less"></style>
