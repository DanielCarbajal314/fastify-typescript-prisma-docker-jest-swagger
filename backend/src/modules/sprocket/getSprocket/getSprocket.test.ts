import { describe, expect, it, beforeEach } from '@jest/globals';
import { PrismaClient } from '@prisma/client';
import { buildGetSprocketFn } from './getSprocket';
import { getSprocketType } from './getSprocketType';
describe('GetSprocket', () => {
  let prisma: PrismaClient;
  let getSprocket: getSprocketType;

  beforeEach(() => {
    prisma = new PrismaClient();
    getSprocket = buildGetSprocketFn(prisma);
  });

  it('should find Sprocket', async () => {
    jest.spyOn(prisma.sprockets, 'findUnique').mockResolvedValue({
      id: 1,
      teeth: 1,
      pitchDiameter: 1,
      outsideDiameter: 1,
      pitch: 1
    });
    const result = await getSprocket(1);
    expect(result.id).toEqual(1);
    expect(result.teeth).toEqual(1);
    expect(result.pitchDiameter).toEqual(1);
    expect(result.outsideDiameter).toEqual(1);
    expect(result.pitch).toEqual(1);
  });

  it('should trigger exception on not found', async () => {
    jest.spyOn(prisma.sprockets, 'findUnique').mockResolvedValue(null);
    await expect(getSprocket(1)).rejects.toThrow('Resource not found');
  });
});
