const contentTableConfig = {
  title: "用户列表",
  showColumnSelection: true,
  showColumnIndex: true,
  propsList: [
    { prop: "name", label: "用户名", minWidth: "70" },
    { prop: "realname", label: "真实姓名", minWidth: "70" },
    { prop: "cellphone", label: "手机号码", minWidth: "90" },
    { prop: "enable", label: "状态", minWidth: "50", slotName: "status" },
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
