import { FastifyInstance } from 'fastify';

export const setupHealthCheck = (server: FastifyInstance) => {
  server.get('/healthcheck', async (request, reply) =>
    reply.code(200).send({ status: 'Ok' })
  );
};
