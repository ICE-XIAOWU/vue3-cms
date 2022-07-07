import { IForm } from "@/base-ui/form/types"
export const searchFormConfig: IForm = {
  labelWidth: "120px",
  formItems: [
    {
      field: "name",
      type: "input",
      name: "分类名称",
      placeholder: "请输入分类名称"
    },
    {
      field: "createAt",
      type: "datepicker",
      name: "创建时间",
      otherOptions: {
        startPlaceholder: "请选择开始日期",
        endPlaceholder: "请选择结束日期",
        type: "daterange"
      }
    }
  ]
}
