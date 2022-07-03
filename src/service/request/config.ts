// 环境变量

// 方法一：手动切换环境
// const BASE_URL = "http://coderwhy.org/prod"

// const BASE_URL = "http://coderwhy.org/test"

// 方法二：根据process.env.NODE_ENV来切换
// 开发环境：development
// 生产环境：production
// 测试环境：test
let BASE_URL = ""
const TIME_OUT = 2000

if (process.env.NODE_ENV === "development") {
  BASE_URL = "/api"
} else if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://coderwhy.org/prod"
} else {
  BASE_URL = "http://coderwhy.org/test"
}

export { TIME_OUT, BASE_URL }

// 方法三：创建不同的.env文件修改
