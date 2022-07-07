import { ref } from "vue"
import PageModal from "@/components/page-modal"
type callbackFn = (item?: any) => void

export function usePageModal(newCb?: callbackFn, editCb?: callbackFn) {
  const pageModalRef = ref<InstanceType<typeof PageModal>>()
  const defaultInfo = ref({})
  const handleNewData = () => {
    defaultInfo.value = {}
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    newCb && newCb()
  }

  const handleEditData = (item: any) => {
    if (pageModalRef.value) {
      pageModalRef.value.centerDialogVisible = true
    }
    defaultInfo.value = { ...item }
    editCb && editCb(item)
  }

  return [pageModalRef, defaultInfo, handleEditData, handleNewData]
}
