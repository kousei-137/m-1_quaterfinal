import { d as defineEventHandler, r as readBody, c as createError } from './nitro/node-server.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';

const prisma = new PrismaClient();
const score_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    if (!body.score || !body.comedianId || !body.userId) {
      throw createError({
        statusCode: 500,
        statusMessage: "\u30EA\u30AF\u30A8\u30B9\u30C8\u60C5\u5831\u3092\u898B\u3064\u3051\u308B\u3053\u3068\u304C\u51FA\u6765\u307E\u305B\u3093"
      });
    }
    console.log(body.score + "\u70B9 " + body.userId + "\u30E6\u30FC\u30B6\u30FC" + body.comedianId + "\u3055\u3093");
    const scoredData = await prisma.score.findFirst({
      where: {
        userId: body.userId,
        comedianId: body.comedianId
      }
    });
    if (scoredData == null ? void 0 : scoredData.id) {
      const score2 = await prisma.score.update({
        where: {
          id: scoredData.id
        },
        data: {
          score: body.score,
          userId: body.userId,
          comedianId: body.comedianId
        }
      });
      return { score: score2 };
    }
    const score = await prisma.score.create({
      data: {
        score: body.score,
        userId: body.userId,
        comedianId: body.comedianId
      }
    });
    return { score };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "\u5F97\u70B9\u306E\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F"
    });
  }
});

export { score_post as default };
//# sourceMappingURL=score.post.mjs.map
