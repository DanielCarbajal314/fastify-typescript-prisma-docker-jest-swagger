import { NotFoundException } from '../../../shared/exceptions/NotFoundException';
import { updateSprockeType } from './updateSprocketsType';
import { PrismaClient } from '@prisma/client';

export const buildUpdateSprocketFn =
  (client: PrismaClient): updateSprockeType =>
  async ({ id, ...others }) => {
    const sprocket = await client.sprockets.findUnique({
      where: { id }
    });
    if (!sprocket) {
      throw new NotFoundException();
    }
    return client.sprockets.update({
      where: { id },
      data: {
        ...others
      }
    });
  };
