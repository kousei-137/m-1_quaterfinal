export const useUpdateAverageScore = async (comedianId: string) => {
    try {
        const { data, error } = await useFetch('/api/updateAverageScore', {
            method: 'POST',
            body: {
                comedianId: comedianId,
            }
        })
        if (error.value) {
            throw createError({
                statusCode: 500,
                message: '平均点の登録に失敗しました'
            })
        }
        return data.value
    } catch (error) {
        throw createError({
            statusCode: 500,
            message: '平均点の登録に失敗しました'
        })
    }

}