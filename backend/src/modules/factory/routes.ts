import { FastifyInstance } from 'fastify';
import { getFactoryHandler } from './getFactory/getFactoryHandler';
import { idParameter } from '../../shared/schemas';

export async function factoryRoutes(server: FastifyInstance) {
  server.addSchema({
    $id: 'factory',
    type: 'object',
    properties: {
      id: { type: 'integer' },
      sprocketProductionActual: {
        type: 'array',
        items: { type: 'integer' }
      },
      sprocketProductionGoal: {
        type: 'array',
        items: { type: 'integer' }
      },
      time: {
        type: 'array',
        items: { type: 'integer' }
      }
    }
  });

  server.get(
    '/:id',
    {
      schema: {
        params: { ...idParameter },
        response: {
          200: { $ref: 'factory' }
        }
      }
    },
    getFactoryHandler
  );
}
