export const modalConfig = {
  labelWidth: "80px",
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
      field: "password",
      type: "password",
      name: "密码",
      placeholder: "请输入密码",
      isHidden: false
    },
    {
      field: "cellphone",
      type: "input",
      name: "电话号码",
      placeholder: "请输入电话号码"
    },
    {
      field: "enable",
      type: "select",
      name: "状态",
      placeholder: "请选择状态",
      options: [
        { name: "启用", value: 1 },
        { name: "禁用", value: 0 }
      ]
    },
    {
      field: "departmentId",
      type: "select",
      name: "部门",
      placeholder: "请选择部门",
      options: []
    },
    {
      field: "roleId",
      type: "select",
      name: "角色",
      placeholder: "请选择角色",
      options: []
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {
    padding: "20px"
  }
}
