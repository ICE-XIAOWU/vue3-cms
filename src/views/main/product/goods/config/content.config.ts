const contentTableConfig = {
  title: "商品列表",
  showColumnIndex: true,
  propsList: [
    { prop: "name", label: "商品名称", minWidth: "70" },
    { prop: "categoryId", label: "商品类别", minWidth: "60" },
    { prop: "oldPrice", label: "原价格", minWidth: "70" },
    { prop: "newPrice", label: "现价格", minWidth: "90" },
    { prop: "desc", label: "商品描述", minWidth: "60" },

    { prop: "imgUrl", label: "商品图片", minWidth: "100", slotName: "image" },
    {
      prop: "inventoryCount",
      label: "库存",
      minWidth: "50"
    },
    { prop: "address", label: "地址", minWidth: "60" },

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
