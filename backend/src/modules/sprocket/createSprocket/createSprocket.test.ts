import { describe, expect, it, beforeEach } from '@jest/globals';
import { PrismaClient } from '@prisma/client';
import { buildCreateSprocketFn } from './createSprocket';
import { createSprocketType } from './createSprocketType';
describe('GetSprocket', () => {
  let prisma: PrismaClient;
  let createSprocket: createSprocketType;

  beforeEach(() => {
    prisma = new PrismaClient();
    createSprocket = buildCreateSprocketFn(prisma);
  });

  it('To create sprocket', async () => {
    jest.spyOn(prisma.sprockets, 'create').mockResolvedValue({
      id: 1,
      teeth: 2,
      pitchDiameter: 2,
      outsideDiameter: 2,
      pitch: 2
    });
    const result = await createSprocket({
      teeth: 1,
      pitchDiameter: 1,
      outsideDiameter: 1,
      pitch: 1
    });
    expect(prisma.sprockets.create).toBeCalled();
    expect(result.id).toEqual(1);
    expect(result.teeth).toEqual(2);
    expect(result.pitchDiameter).toEqual(2);
    expect(result.outsideDiameter).toEqual(2);
    expect(result.pitch).toEqual(2);
  });
});
