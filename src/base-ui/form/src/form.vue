<template>
  <div class="form">
    <div class="header">
      <slot name="header"> </slot>
    </div>

    <el-form>
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <el-col v-bind="colLayout">
            <!-- input -->
            <template v-if="item.type === 'input' || item.type === 'password'">
              <el-form-item
                :style="itemStyle"
                :label-width="labelWidth"
                :label="item.name"
                v-if="!item.isHidden"
              >
                <el-input
                  :type="item.type"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                />
              </el-form-item>
            </template>
            <!-- select -->
            <template v-if="item.type === 'select'">
              <el-form-item
                :style="itemStyle"
                :label-width="labelWidth"
                :label="item.name"
              >
                <el-select
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="opt in item.options"
                    :key="opt.name"
                    :value="opt.value"
                    v-model="formData[`${item.field}`]"
                    >{{ opt.name }}
                  </el-option>
                </el-select>
              </el-form-item>
            </template>
            <!-- datepicker -->
            <template v-if="item.type === 'datepicker'">
              <el-form-item
                :style="itemStyle"
                :label-width="labelWidth"
                :label="item.name"
              >
                <el-date-picker
                  :type="item.otherOptions.type"
                  :start-placeholder="item.otherOptions.startPlaceholder"
                  :end-placeholder="item.otherOptions.endPlaceholder"
                  v-model="formData[`${item.field}`]"
                />
              </el-form-item>
            </template>
          </el-col>
        </template>
      </el-row>
    </el-form>

    <div class="footer">
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue"
import { IFormItem, IColLayout } from "../types"

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: "120px"
    },
    itemStyle: {
      type: Object,
      default: () => ({
        padding: "20px 10px"
      })
    },
    colLayout: {
      type: Object as PropType<IColLayout>,
      default: () => ({
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12,
        xl: 8
      })
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    // 双向绑定表单数据
    const formData = ref({ ...props.modelValue })
    watch(
      formData,
      (newValue) => {
        emit("update:modelValue", newValue)
      },
      { deep: true }
    )

    return {
      formData
    }
  }
})
</script>

<style scoped>
.header {
  padding: 20px;
  text-align: center;
  color: #444;
}
.el-form-item {
  margin-bottom: 0;
}

.footer {
  text-align: right;
  padding: 20px 50px 30px 0;
}
</style>
