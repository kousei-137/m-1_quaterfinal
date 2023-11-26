import { d as defineEventHandler } from './nitro/node-server.mjs';
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
const getAllComedian = defineEventHandler(async () => {
  const allComedian = await prisma.comedian.findMany({
    orderBy: { "id": "desc" },
    include: {
      scores: true
    }
  });
  return allComedian;
});

export { getAllComedian as default };
//# sourceMappingURL=getAllComedian.mjs.map
