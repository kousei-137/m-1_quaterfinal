import type { Comedian } from "@prisma/client"
import { useComediansStore } from "~/stores/comedians"

// export const useComedians = async() => {
//     return useState<Comedian[]>('comedians', () => useAllComedian())
// }

export const fetchAllComedian = async () => {
    const comedianStore = useComediansStore()
    try {
        const { data, error } = await useFetch('/api/getAllComedian')
        if (error.value) {
            throw createError({
                statusCode: error.value.statusCode,
                statusMessage: '全ての芸人を取得することができません。',
            })
        }
        comedianStore.value = data.value as Comedian[]
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: '全ての芸人を取得することができません。',
        })
    }
}