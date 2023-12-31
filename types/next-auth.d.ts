import type { DefaultSession } from 'next-auth'
import { JWT } from 'next-auth/jwt'

declare module 'next-auth' {
  interface Session {
    user: {
      id: number
      name: string
      password: string?
    } & DefaultSession['user'],
    id: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    twitterId: string?
  }
}
