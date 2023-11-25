import { useComediansStore } from "~/stores/comedians"

export const useSortComediansByName = () => {
    const comedianStore = useComediansStore()
    comedianStore.value = comedianStore.value.sort((a, b) => a.name.localeCompare(b.name, 'ja'))
  }