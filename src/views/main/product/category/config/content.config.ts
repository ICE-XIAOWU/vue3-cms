const contentTableConfig = {
  title: "商品分类列表",
  showColumnIndex: true,
  propsList: [
    { prop: "name", label: "分类名称", minWidth: "70" },
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
