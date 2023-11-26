import { e as eventHandler } from './nitro/node-server.mjs';
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
const getScore = eventHandler(async () => {
  return await prisma.score.findMany();
});

export { getScore as default };
//# sourceMappingURL=getScore.mjs.map
