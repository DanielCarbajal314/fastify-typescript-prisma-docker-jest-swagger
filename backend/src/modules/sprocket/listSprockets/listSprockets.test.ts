import { describe, expect, it, beforeEach } from '@jest/globals';
import { PrismaClient } from '@prisma/client';
import { buildListSprocketFn } from './listSprockets';
import { listSprocketType } from './listSprocketsType';
describe('GetSprocket', () => {
  let prisma: PrismaClient;
  let listSprocket: listSprocketType;

  beforeEach(() => {
    prisma = new PrismaClient();
    listSprocket = buildListSprocketFn(prisma);
  });

  it('Should List Sprockets', async () => {
    jest.spyOn(prisma.sprockets, 'findMany').mockResolvedValue([
      {
        id: 1,
        teeth: 1,
        pitchDiameter: 1,
        outsideDiameter: 1,
        pitch: 1
      }
    ]);
    const result = await listSprocket();
    expect(result[0].id).toEqual(1);
    expect(result[0].teeth).toEqual(1);
    expect(result[0].pitchDiameter).toEqual(1);
    expect(result[0].outsideDiameter).toEqual(1);
    expect(result[0].pitch).toEqual(1);
  });
});
