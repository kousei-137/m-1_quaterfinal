import CredentialsProvider from 'next-auth/providers/credentials'
import TwitterProvider from 'next-auth/providers/twitter'
import { PrismaClient, User } from '@prisma/client'
import { compare } from 'bcrypt'
import { NuxtAuthHandler } from '#auth'

const runtimeConfig = useRuntimeConfig()
const prisma = new PrismaClient()

const signInWithTwitter = async (user: User) => {
    try {
        let registeredUser = await prisma.user.findUnique({
            where: {
                twitterId: user.name!
            }
        })
        if (!registeredUser) {
            registeredUser = await prisma.user.create({
                data: {
                    twitterId: user.name
                }
            })
        }
        if (!registeredUser) {
            throw createError({
                statusCode: 500,
                statusMessage: 'ユーザー登録失敗しました。'
            })
        }
        return true
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'twitter login is failed'
        })
    }
}

const getMeWithTwitter = async (twitterName: string) => {
    try {
        const me = await prisma.user.findUnique({
            where: {
                twitterId: twitterName
            }
        })
        if (!me) {
            throw createError({
                statusCode: 500,
                statusMessage: 'ユーザーが存在しません'
            })
        }
        return me
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'twitter getMe is failed'
        })
    }
}

const getMe = async (userName: string) => {
    try {
      const me = await prisma.user.findUnique({
        where: {
          name: userName
        }
      })
      if (!me) {
        throw createError({
          statusCode: 500,
          statusMessage: 'ユーザーが存在しません'
        })
      }
      return me
    } catch (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'twitter getMe is failed'
      })
    }
  }

export default NuxtAuthHandler({
    pages: {
        signIn: '/',
        signOut: '/'
    },
    session: {
        strategy: 'jwt'
    },
    jwt: {

    },
    secret: runtimeConfig.NEXTAUTH_SECRET,
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === 'twitter') {
                return await signInWithTwitter(user as User)
            }
            return true
        },
        jwt: async ({ token, user, account }) => {
            let userInfoInDB
            if (account?.provider === 'twitter') {
                userInfoInDB = await getMeWithTwitter(user?.name!)
            } else if (account?.provider === 'credentials') {
                userInfoInDB = await getMe(user?.name!)
            }
            const isSignIn = !!user
            if (isSignIn) {
                token.jwt = !!user
                token.id = userInfoInDB?.id || ''
            }
            return Promise.resolve(token)
        },
        session: ({ session, token }) => {
            (session as any).id = token.uid
            return Promise.resolve(session)
        }
    },
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        TwitterProvider.default({
            clientId:
                runtimeConfig.public.TWITTER_CLIENT_ID || 'enter-your-client-id-here',
            clientSecret:
                runtimeConfig.TWITTER_CLIENT_SECRET || 'enter-your-client-secret-here' // TODO: Replace this with an env var like "process.env.GITHUB_CLIENT_SECRET". The secret should never end up in your github repository
        }),
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        CredentialsProvider.default({
            name: 'Credentials',
            async authorize(credentials: any) {
                const user = await prisma.user.findUnique({
                    where: {
                        name: credentials?.name
                    }
                })
                if (!user) {
                    throw createError({
                        statusCode: 403,
                        statusMessage: 'ユーザーIDが存在しません'
                    })
                }
                const isPasswordValid = await compare(credentials?.password, user.passwordHash!)
                if (!isPasswordValid) {
                    throw createError({
                        statusCode: 403,
                        statusMessage: 'パスワードが違います'
                    })
                }
                /* eslint-disable no-console */
                console.log(user)
                return user
            }
        })
    ]
})
