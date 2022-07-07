type ItemType = "input" | "password" | "select" | "datepicker"

export interface IColLayout {
  xs?: number
  sm?: number
  md?: number
  lg?: number
  xl?: number
  span?: number
}

export interface IFormItem {
  field: string
  type: ItemType
  name: string
  rules?: any[]
  placeholder?: string
  // 针对select
  options?: any
  // 针对datepicker
  otherOptions?: any
  isHidden?: boolean
}

export interface IForm {
  formItems: IFormItem[]
  labelWidth?: string
  itemStyle?: any
  colLayout?: IColLayout
}
