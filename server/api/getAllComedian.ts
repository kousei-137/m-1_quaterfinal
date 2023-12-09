import {PrismaClient, Comedian} from "@prisma/client"

const prisma = new PrismaClient()

export default defineEventHandler(async (): Promise<Comedian[]> => {
    const allComedian = await prisma.comedian.findMany({
        orderBy: {"id": "desc"},
        include: {
            scores: true
        }
    })
    return allComedian
})