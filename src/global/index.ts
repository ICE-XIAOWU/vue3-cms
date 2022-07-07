import { App } from "vue"
import registerElementIcon from "./register-element-icon"
import registerProperties from "./register-properties"

function globalRegister(app: App) {
  app.use(registerElementIcon)
  app.use(registerProperties)
}

export default globalRegister
