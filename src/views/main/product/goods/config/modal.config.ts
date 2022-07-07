export const modalConfig = {
  labelWidth: "100px",
  formItems: [
    {
      field: "name",
      type: "input",
      name: "商品名称",
      placeholder: "请输入商品名称"
    },
    {
      field: "oldPrice",
      type: "input",
      name: "商品原价格",
      placeholder: "请输入商品原价格"
    },
    {
      field: "newPrice",
      type: "input",
      name: "商品现价格",
      placeholder: "请输入商品现价格"
    },
    {
      field: "desc",
      type: "input",
      name: "商品描述",
      placeholder: "请输入商品描述"
    },
    {
      field: "imgUrl",
      type: "input",
      name: "商品图片链接",
      placeholder: "请输入商品图片链接"
    },
    {
      field: "address",
      type: "input",
      name: "商品地址",
      placeholder: "请输入商品地址"
    },
    {
      field: "inventoryCount",
      type: "input",
      name: "商品库存",
      placeholder: "请输入商品库存"
    },
    {
      field: "categoryId",
      type: "select",
      name: "商品类别",
      placeholder: "请输入商品类别",
      options: []
    }
  ],
  colLayout: { span: 24 },
  itemStyle: {
    padding: "20px"
  }
}
