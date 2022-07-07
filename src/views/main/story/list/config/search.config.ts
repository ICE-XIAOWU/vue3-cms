import { IForm } from "@/base-ui/form/types"
export const searchFormConfig: IForm = {
  labelWidth: "120px",
  formItems: [
    {
      field: "title",
      type: "input",
      name: "故事名字",
      placeholder: "请输入故事名字"
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
