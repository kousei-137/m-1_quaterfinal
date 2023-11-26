import { Score, Comedian, User } from "@prisma/client"

declare module '@prisma/client' {
    interface Comedian {
        id: string
        name: string
        averageScore?: number | null
        scores?: Score[] | null
    }
}