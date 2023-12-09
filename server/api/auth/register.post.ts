import { H3Event } from 'h3'
import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()
export default defineEventHandler(async (event: H3Event) => {
  try {
    const body = await readBody(event)
    if (!body.name || !body.password) {
      throw createError({
        statusCode: 500,
        statusMessage: 'リクエスト情報を見つけることが出来ません'
      })
    }
    const isRegisteredUser = await prisma.user.findUnique({
      where: {
        name: body.name
      }
    })
    if (isRegisteredUser) {
      throw createError({
        statusCode: 500,
        statusMessage: 'このユーザーは既に存在します'
      })
    }

    const passwordHash = await hash(body.password, 12)
    const user = await prisma.user.create({
      data: {
        name: body.name,
        passwordHash: passwordHash
      }
    })

    setResponseStatus(event, 201)

    return { user }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: '登録に失敗しました'
    })
  }
})
