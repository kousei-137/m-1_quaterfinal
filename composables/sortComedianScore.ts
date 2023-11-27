import { useComediansStore } from "~/stores/comedians"

export const useSortComediansByScore = () => {
    const comedianStore = useComediansStore()
    comedianStore.value = comedianStore.value.sort((a, b) => b.averageScore! - a.averageScore!)
  }