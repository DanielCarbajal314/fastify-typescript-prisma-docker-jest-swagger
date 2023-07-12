import { PrismaClient } from '@prisma/client';
import { SprocketsSeedRecords } from '../data/sprocketSource';
import { Logger } from 'pino';

export const seedSprocket = async (prisma: PrismaClient, logger: Logger) => {
  logger.info('Seeding sprockets');
  const { count } = await prisma.sprockets.createMany({
    data: SprocketsSeedRecords
  });
  logger.info(`${count} sprockets created`);
};
