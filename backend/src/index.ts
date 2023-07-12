import fastify from 'fastify';
import { serverPort } from './config/enviromentVariables';
import { sprocketRoutes, factoryRoutes } from './modules';
import { logger } from './shared/logger';
import { setupSwagger } from './config/swagger';
import { setupHealthCheck } from './config/healthCheck';
import { setupCors } from './config/cors';
import { setupExceptionHandling } from './config/exceptionHandling';

const server = fastify({
  trustProxy: true,
  logger: logger
});
setupSwagger(server, `localhost:${serverPort}`);
setupHealthCheck(server);
setupCors(server);
setupExceptionHandling(server);

server.register(sprocketRoutes, { prefix: 'api/sprocket' });
server.register(factoryRoutes, { prefix: 'api/factory' });

server.listen({ port: serverPort, host: '0.0.0.0' }, async (err, address) => {
  if (err) {
    logger.error(err);
    process.exit(1);
  }
  await server.ready();
  server.swagger();
  logger.info(`Server listening at ${address}`);
});
