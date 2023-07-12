import { PrismaClient } from '@prisma/client';
import { seedFactory } from './actions/seedFactory';
import { seedSprocket } from './actions/seedSprocket';
import { pino } from 'pino';

const prisma = new PrismaClient();
const logger = pino();

(async () => {
  try {
    const factoryCount = await prisma.factory.count();
    const sprocketCount = await prisma.sprockets.count();
    if (!factoryCount) {
      await seedFactory(prisma, logger);
    }
    if (!sprocketCount) {
      await seedSprocket(prisma, logger);
    }
    logger.info('Data seeding process ended successfully');
    process.exit();
  } catch (e) {
    logger.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }
})();
