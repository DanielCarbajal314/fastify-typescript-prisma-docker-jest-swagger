import { listSprocketType } from './listSprocketsType';
import { PrismaClient } from '@prisma/client';

export const buildListSprocketFn =
  (client: PrismaClient): listSprocketType =>
  () =>
    client.sprockets.findMany();
