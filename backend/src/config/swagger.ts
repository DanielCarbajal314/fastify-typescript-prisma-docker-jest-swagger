import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import { FastifyInstance } from 'fastify';

export const setupSwagger = (server: FastifyInstance, host: string) => {
  const swaggerOptions = {
    swagger: {
      info: {
        title: 'Test swagger',
        description: 'testing the fastify swagger api',
        version: '0.1.0'
      },
      host,
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json']
    }
  };

  const swaggerUiOptions = {
    routePrefix: '/',
    exposeRoute: true
  };
  server.register(fastifySwagger, swaggerOptions);
  server.register(fastifySwaggerUi, swaggerUiOptions);
};
