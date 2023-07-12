import { createSprocketType } from './createSprocketType';
import { PrismaClient } from '@prisma/client';

export const buildCreateSprocketFn =
  (client: PrismaClient): createSprocketType =>
  (data) =>
    client.sprockets.create({
      data
    });
