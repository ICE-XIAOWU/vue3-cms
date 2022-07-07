import { ref } from "vue"
import PageContent from "@/components/page-content"

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleResetClick = () => {
    if (pageContentRef.value) {
      pageContentRef?.value.getPageData()
    }
  }
  const handleQueryClick = (queryInfo: any) => {
    if (pageContentRef.value) {
      pageContentRef?.value.getPageData(queryInfo)
    }
  }

  return [pageContentRef, handleQueryClick, handleResetClick]
}
