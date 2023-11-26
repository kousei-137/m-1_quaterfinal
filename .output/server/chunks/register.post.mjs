import { d as defineEventHandler, r as readBody, c as createError, s as setResponseStatus } from './nitro/node-server.mjs';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';

const prisma = new PrismaClient();
const register_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    console.log("register method is running");
    if (!body.name || !body.password) {
      throw createError({
        statusCode: 500,
        statusMessage: "\u30EA\u30AF\u30A8\u30B9\u30C8\u60C5\u5831\u3092\u898B\u3064\u3051\u308B\u3053\u3068\u304C\u51FA\u6765\u307E\u305B\u3093"
      });
    }
    console.log("body is found");
    const isRegisteredUser = await prisma.user.findUnique({
      where: {
        name: body.name
      }
    });
    console.log(isRegisteredUser);
    if (isRegisteredUser) {
      throw createError({
        statusCode: 500,
        statusMessage: "\u3053\u306E\u30E6\u30FC\u30B6\u30FC\u306F\u65E2\u306B\u5B58\u5728\u3057\u307E\u3059"
      });
    }
    const passwordHash = await hash(body.password, 12);
    const user = await prisma.user.create({
      data: {
        name: body.name,
        passwordHash
      }
    });
    setResponseStatus(event, 201);
    return { user };
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      statusMessage: "\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F"
    });
  }
});

export { register_post as default };
//# sourceMappingURL=register.post.mjs.map
