import { IForm } from "@/base-ui/form/types"
export const searchFormConfig: IForm = {
  labelWidth: "120px",
  formItems: [
    {
      field: "name",
      type: "input",
      name: "商品名称",
      placeholder: "请输入商品名称"
    },
    {
      field: "categoryId",
      type: "select",
      name: "商品类别",
      placeholder: "请输入商品类别"
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
