import { App } from "vue"
import { formatUtcString } from "@/utils/format-time"
function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }
}

export default registerProperties
