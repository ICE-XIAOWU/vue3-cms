const contentTableConfig = {
  title: "菜单列表",
  showColumnIndex: true,
  showFooter: false,
  propsList: [
    { prop: "name", label: "菜单名称", minWidth: "70" },
    { prop: "type", label: "菜单类型", minWidth: "70" },
    { prop: "url", label: "菜单url", minWidth: "70" },
    { prop: "permission", label: "菜单权限", minWidth: "70" },
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
  ],
  childrenProps: {
    rowKey: "id",
    treeProps: { children: "children" }
  }
}

export { contentTableConfig }
