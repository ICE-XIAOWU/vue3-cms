import { IForm } from "@/base-ui/form/types"
export const searchFormConfig: IForm = {
  labelWidth: "120px",
  itemStyle: {
    padding: "20px 40px"
  },
  formItems: [
    {
      field: "name",
      type: "input",
      name: "部门名称",
      placeholder: "请输入部门名称"
    },
    {
      field: "leader",
      type: "input",
      name: "部门领导",
      placeholder: "请输入部门领导"
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
