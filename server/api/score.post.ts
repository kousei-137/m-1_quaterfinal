import { H3Event } from 'h3'
import { PrismaClient, Score } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event: H3Event) => {
    try {
        const body: Score = await readBody(event)
        if (!body.score || !body.comedianId || !body.userId) {
            throw createError({
                statusCode: 500,
                statusMessage: 'リクエスト情報を見つけることが出来ません'
            })
        }
        const scoredData: Score | null = await prisma.score.findFirst({
            where: {
                userId: body.userId,
                comedianId: body.comedianId
            }
        })
        if (scoredData?.id) {
            const score = await prisma.score.update({
                where: {
                    id: scoredData.id
                },
                data: {
                    score: body.score,
                    userId: body.userId,
                    comedianId: body.comedianId,
                }
            })
            return { score }
        }
        const score = await prisma.score.create({
            data: {
                score: body.score,
                userId: body.userId,
                comedianId: body.comedianId,
            }
        })
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: '得点の登録に失敗しました'
        })
    }
})