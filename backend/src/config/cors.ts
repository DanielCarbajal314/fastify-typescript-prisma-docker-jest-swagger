import { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';

export const setupCors = (server: FastifyInstance) => {
  server.register(cors, {
    allowedHeaders: '*',
    methods: '*',
    origin: '*'
  });
};
