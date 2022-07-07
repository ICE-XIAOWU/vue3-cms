const contentTableConfig = {
  title: "部门列表",
  showColumnIndex: true,
  propsList: [
    { prop: "name", label: "部门名称", minWidth: "70" },
    { prop: "parentId", label: "上级部门", minWidth: "70" },
    { prop: "leader", label: "部门领导", minWidth: "90" },
    {
      prop: "createAt",
      label: "创建时间",
      minWidth: "120",
      slotName: "createAt"
    },
    {
      prop: "updateAt",
      label: "更新时间",
      minWidth: "120",
      slotName: "updateAt"
    },
    {
      prop: "operate",
      label: "操作",
      width: "170",
      slotName: "operate"
    }
  ]
}

export { contentTableConfig }
