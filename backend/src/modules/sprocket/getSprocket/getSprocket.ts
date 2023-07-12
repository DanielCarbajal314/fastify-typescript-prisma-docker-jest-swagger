import { NotFoundException } from '../../../shared/exceptions/NotFoundException';
import { getSprocketType } from './getSprocketType';
import { PrismaClient } from '@prisma/client';

export const buildGetSprocketFn =
  (client: PrismaClient): getSprocketType =>
  async (id) => {
    const sprocket = await client.sprockets.findUnique({
      where: { id }
    });
    if (!sprocket) {
      throw new NotFoundException();
    }
    return sprocket;
  };
