import { describe, expect, it, beforeEach } from '@jest/globals';
import { PrismaClient } from '@prisma/client';
import { buildGetFactoryFn } from './getFactory';
import { getFactoryType } from './getFactoryType';
describe('GetFactory', () => {
  let prisma: PrismaClient;
  let getFactory: getFactoryType;

  beforeEach(() => {
    prisma = new PrismaClient();
    getFactory = buildGetFactoryFn(prisma);
  });

  it('should find Factory', async () => {
    jest.spyOn(prisma.factory, 'findUnique').mockResolvedValue({
      id: 1,
      sprocketProductionActual: [1],
      sprocketProductionGoal: [1],
      time: [1]
    });
    const result = await getFactory(1);
    expect(result.id).toEqual(1);
    expect(result.sprocketProductionActual[0]).toEqual(1);
    expect(result.sprocketProductionGoal[0]).toEqual(1);
    expect(result.time[0]).toEqual(1);
  });

  it('should trigger exception on not found', async () => {
    jest.spyOn(prisma.factory, 'findUnique').mockResolvedValue(null);
    await expect(getFactory(1)).rejects.toThrow('Resource not found');
  });
});
