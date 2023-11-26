import { PrismaClient, Score } from '@prisma/client'
const prisma = new PrismaClient()

export default eventHandler(async () => {
    return await prisma.score.findMany()
})