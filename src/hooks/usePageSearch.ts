import { ref } from "vue"
import PageContent from "@/components/page-content"

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>()

  const handleResetClick = () => {
    console.log(1)
    if (pageContentRef.value) {
      pageContentRef?.value.getPageData()
    }
  }
  const handleQueryClick = (queryInfo: any) => {
    console.log(2)
    if (pageContentRef.value) {
      pageContentRef?.value.getPageData(queryInfo)
    }
  }

  return [pageContentRef, handleQueryClick, handleResetClick]
}
