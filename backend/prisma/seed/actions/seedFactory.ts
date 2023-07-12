import { PrismaClient } from '@prisma/client';
import { factorySeedRecords } from '../data/factorySource';
import { Logger } from 'pino';

export const seedFactory = async (prisma: PrismaClient, logger: Logger) => {
  logger.info('Seeding factories');
  const { count } = await prisma.factory.createMany({
    data: factorySeedRecords
  });
  logger.info(`${count} factories created`);
};
