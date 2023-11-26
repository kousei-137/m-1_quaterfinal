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
const updateAverageScore_post = defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);
    const scores = await prisma.score.findMany({
      where: { comedianId: body.comedianId },
      select: { score: true }
    });
    const averageScore = scores.reduce((acc, curr) => acc + curr.score, 0) / scores.length;
    return await prisma.comedian.update({
      where: { id: body.comedianId },
      data: { averageScore }
    });
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "\u5F97\u70B9\u306E\u66F4\u65B0\u306B\u5931\u6557\u3057\u307E\u3057\u305F"
    });
  }
});

export { updateAverageScore_post as default };
//# sourceMappingURL=updateAverageScore.post.mjs.map
