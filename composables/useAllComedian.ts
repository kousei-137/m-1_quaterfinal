import type { Comedian } from "@prisma/client"

export const useAllComedian = async (): Promise<Comedian[]> => {
    try {
        const { data, error } = useFetch('/api/getAllComedian')
        if (error.value) {
            throw createError({
                statusCode: error.value.statusCode,
                statusMessage: '全ての芸人を取得することができません。',
            })
        }
        return data.value as Comedian[]; // ここで型アサーションを使用
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: '全ての芸人を取得することができません。',
        })
    }
}
