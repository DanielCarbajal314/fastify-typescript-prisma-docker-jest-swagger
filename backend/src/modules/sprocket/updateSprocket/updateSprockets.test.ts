import { describe, expect, it, beforeEach } from '@jest/globals';
import { PrismaClient } from '@prisma/client';
import { buildUpdateSprocketFn } from './updateSprockets';
import { updateSprockeType } from './updateSprocketsType';
describe('GetSprocket', () => {
  let prisma: PrismaClient;
  let updateSprocket: updateSprockeType;

  beforeEach(() => {
    prisma = new PrismaClient();
    updateSprocket = buildUpdateSprocketFn(prisma);
  });

  it('To Update', async () => {
    jest.spyOn(prisma.sprockets, 'findUnique').mockResolvedValue({
      id: 1,
      teeth: 1,
      pitchDiameter: 1,
      outsideDiameter: 1,
      pitch: 1
    });
    jest.spyOn(prisma.sprockets, 'update').mockResolvedValue({
      id: 1,
      teeth: 2,
      pitchDiameter: 2,
      outsideDiameter: 2,
      pitch: 2
    });
    const result = await updateSprocket({
      id: 1,
      teeth: 1,
      pitchDiameter: 1,
      outsideDiameter: 1,
      pitch: 1
    });
    expect(prisma.sprockets.findUnique).toBeCalled();
    expect(prisma.sprockets.update).toBeCalled();
    expect(result.id).toEqual(1);
    expect(result.teeth).toEqual(2);
    expect(result.pitchDiameter).toEqual(2);
    expect(result.outsideDiameter).toEqual(2);
    expect(result.pitch).toEqual(2);
  });

  it('should trigger exception on updating non existing Id', async () => {
    jest.spyOn(prisma.sprockets, 'findUnique').mockResolvedValue(null);
    await expect(
      updateSprocket({
        id: 1,
        teeth: 1,
        pitchDiameter: 1,
        outsideDiameter: 1,
        pitch: 1
      })
    ).rejects.toThrow('Resource not found');
  });
});
