import { PrismaClient } from "@prisma/client"
import {H3Event} from "h3"
const prisma = new PrismaClient()
export default defineEventHandler(async (event: H3Event) => {
    try {
        const body = await readBody(event)
        const scores = await prisma.score.findMany({
            where: { comedianId: body.comedianId },
            select: { score: true }
        });
        const averageScore = scores.reduce((acc, curr) => acc + curr.score, 0) / scores.length;

        return await prisma.comedian.update({
            where: { id: body.comedianId },
            data: { averageScore }
        })
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: '得点の更新に失敗しました'
        })
    }
})