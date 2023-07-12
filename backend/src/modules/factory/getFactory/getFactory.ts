import { NotFoundException } from '../../../shared/exceptions/NotFoundException';
import { getFactoryType } from './getFactoryType';
import { PrismaClient } from '@prisma/client';

export const buildGetFactoryFn =
  (client: PrismaClient): getFactoryType =>
  async (id) => {
    const result = await client.factory.findUnique({
      where: { id }
    });
    if (!result) {
      throw new NotFoundException();
    }
    const { sprocketProductionActual, sprocketProductionGoal, time } = result;
    return {
      id,
      sprocketProductionActual: sprocketProductionActual as number[],
      sprocketProductionGoal: sprocketProductionGoal as number[],
      time: time as number[]
    };
  };
