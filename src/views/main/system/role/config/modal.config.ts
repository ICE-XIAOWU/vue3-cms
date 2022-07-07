export const modalConfig = {
  labelWidth: "80px",
  formItems: [
    {
      field: "name",
      type: "input",
      name: "角色名",
      placeholder: "请输入角色名称"
    },
    {
      field: "intro",
      type: "input",
      name: "权限介绍",
      placeholder: "请输入权限介绍"
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {
    padding: "20px"
  }
}
