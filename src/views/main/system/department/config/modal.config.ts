export const modalConfig = {
  labelWidth: "80px",
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
      field: "parentId",
      type: "select",
      name: "上级部门",
      placeholder: "上级部门",
      options: []
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {
    padding: "20px"
  }
}
