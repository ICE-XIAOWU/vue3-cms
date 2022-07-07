import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
dayjs.extend(utc)

const DAFAULT_FORMAT = "YYYY-MM-DD HH:mm:ss"

export function formatUtcString(time: string, format: string = DAFAULT_FORMAT) {
  return dayjs.utc(time).utcOffset(8).format(format)
}
