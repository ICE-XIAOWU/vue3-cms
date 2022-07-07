const contentTableConfig = {
  title: "角色列表",
  showColumnSelection: true,
  showColumnIndex: true,
  propsList: [
    { prop: "name", label: "角色名", minWidth: "70" },
    { prop: "intro", label: "权限介绍", minWidth: "70" },
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
