import { N as NuxtAuthHandler, c as createError, u as useRuntimeConfig } from './nitro/node-server.mjs';
import CredentialsProvider from 'next-auth/providers/credentials';
import TwitterProvider from 'next-auth/providers/twitter';
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcrypt';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';

const runtimeConfig = useRuntimeConfig();
const prisma = new PrismaClient();
const signInWithTwitter = async (user) => {
  try {
    let registeredUser = await prisma.user.findUnique({
      where: {
        name: user.name
      }
    });
    if (!registeredUser) {
      registeredUser = await prisma.user.create({
        data: {
          name: user.name
        }
      });
    }
    if (!registeredUser) {
      throw createError({
        statusCode: 500,
        statusMessage: "\u30E6\u30FC\u30B6\u30FC\u767B\u9332\u5931\u6557\u3057\u307E\u3057\u305F\u3002"
      });
    }
    return true;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "twitter login is failed"
    });
  }
};
const getMeWithTwitter = async (twitterName) => {
  try {
    const me = await prisma.user.findUnique({
      where: {
        name: twitterName
      }
    });
    if (!me) {
      throw createError({
        statusCode: 500,
        statusMessage: "\u30E6\u30FC\u30B6\u30FC\u304C\u5B58\u5728\u3057\u307E\u305B\u3093"
      });
    }
    return me;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "twitter getMe is failed"
    });
  }
};
const getMe = async (userName) => {
  try {
    const me = await prisma.user.findUnique({
      where: {
        name: userName
      }
    });
    if (!me) {
      throw createError({
        statusCode: 500,
        statusMessage: "\u30E6\u30FC\u30B6\u30FC\u304C\u5B58\u5728\u3057\u307E\u305B\u3093"
      });
    }
    return me;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "\u30E6\u30FC\u30B6\u30FC\u60C5\u5831\u3092\u53D6\u5F97\u3067\u304D\u307E\u305B\u3093"
    });
  }
};
const _____ = NuxtAuthHandler({
  pages: {
    signIn: "/",
    signOut: "/"
  },
  session: {
    strategy: "jwt"
  },
  jwt: {},
  secret: runtimeConfig.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account }) {
      if ((account == null ? void 0 : account.provider) === "twitter") {
        return await signInWithTwitter(user);
      }
      return true;
    },
    jwt: async ({ token, user, account }) => {
      console.log(user == null ? void 0 : user.id);
      let userInfoInDB;
      if ((account == null ? void 0 : account.provider) === "twitter") {
        userInfoInDB = await getMeWithTwitter(user == null ? void 0 : user.name);
      } else if ((account == null ? void 0 : account.provider) === "credentials") {
        userInfoInDB = await getMe(user == null ? void 0 : user.name);
      }
      const isSignIn = !!user;
      if (isSignIn) {
        token.jwt = !!user;
        token.id = (userInfoInDB == null ? void 0 : userInfoInDB.id) || "";
      }
      return Promise.resolve(token);
    },
    session: ({ session, token }) => {
      session.id = token.id;
      return Promise.resolve(session);
    }
  },
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    TwitterProvider.default({
      clientId: runtimeConfig.public.TWITTER_CLIENT_ID || "enter-your-client-id-here",
      clientSecret: runtimeConfig.TWITTER_CLIENT_SECRET || "enter-your-client-secret-here"
      // TODO: Replace this with an env var like "process.env.GITHUB_CLIENT_SECRET". The secret should never end up in your github repository
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    CredentialsProvider.default({
      name: "Credentials",
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            name: credentials == null ? void 0 : credentials.name
          }
        });
        if (!user) {
          throw createError({
            statusCode: 403,
            statusMessage: "\u30E6\u30FC\u30B6\u30FCID\u304C\u5B58\u5728\u3057\u307E\u305B\u3093"
          });
        }
        const isPasswordValid = await compare(credentials == null ? void 0 : credentials.password, user.passwordHash);
        if (!isPasswordValid) {
          throw createError({
            statusCode: 403,
            statusMessage: "\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u9055\u3044\u307E\u3059"
          });
        }
        return user;
      }
    })
  ]
});

export { _____ as default };
//# sourceMappingURL=_..._.mjs.map
