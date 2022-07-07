<template>
  <div>
    <el-card class="box-card">
      <div class="title">
        <span>{{ item.title }}</span>
        <el-tooltip
          class="box-item"
          effect="dark"
          :content="item.tips"
          placement="bottom"
        >
          <el-icon><Warning /></el-icon>
        </el-tooltip>
      </div>
      <div class="content">
        <count-up
          :endVal="item.number1"
          :duration="1"
          :options="item.amount === 'saleroom' ? { prefix: '¥ ' } : {}"
        ></count-up>
      </div>
      <el-divider border-style="" />
      <div class="footer">{{ item.subtitle }} : {{ item.number1 }}</div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import CountUp from "vue-countup-v3"

export default defineComponent({
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    CountUp
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.title {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 14px;
  color: #777;
}

.content {
  font-size: 30px;
}

.footer {
  font-size: 14px;
  color: #444;
}
.el-divider {
  margin: 20px 0 10px;
}
</style>
