const contentTableConfig = {
  title: "故事列表",
  showColumnIndex: true,
  propsList: [
    { prop: "title", label: "故事名字", minWidth: "70" },
    { prop: "content", label: "故事内容", minWidth: "300" },
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
