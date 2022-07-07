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
      name: "用户名",
      placeholder: "请输入用户名"
    },
    {
      field: "realname",
      type: "input",
      name: "真实姓名",
      placeholder: "请输入真实姓名"
    },
    {
      field: "cellphone",
      type: "input",
      name: "手机号码",
      placeholder: "请输入手机号码"
    },
    {
      field: "enable",
      type: "select",
      name: "用户状态",
      placeholder: "请选择用户状态",
      options: [
        { name: "启用", value: 1 },
        { name: "禁用", value: 0 }
      ]
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
