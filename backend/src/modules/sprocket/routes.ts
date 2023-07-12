import { FastifyInstance } from 'fastify';
import { getSprocketsHandler } from './getSprocket/getSprocketsHandler';
import { idParameter } from '../../shared/schemas';
import { listSprocketsHandler } from './listSprockets/listSprocketsHandler';
import { createSprocketsHandler } from './createSprocket/createSprocketHandler';
import { updateSprocketsHandler } from './updateSprocket/updateSprocketsHandler';

export async function sprocketRoutes(server: FastifyInstance) {
  server.addSchema({
    $id: 'sprocket',
    type: 'object',
    properties: {
      id: { type: 'integer' },
      teeth: { type: 'integer' },
      pitchDiameter: { type: 'integer' },
      outsideDiameter: { type: 'integer' },
      pitch: { type: 'integer' }
    }
  });
  server.addSchema({
    $id: 'newSprocket',
    type: 'object',
    properties: {
      teeth: { type: 'integer' },
      pitchDiameter: { type: 'integer' },
      outsideDiameter: { type: 'integer' },
      pitch: { type: 'integer' }
    }
  });

  server.get(
    '/',
    {
      schema: {
        response: {
          200: {
            type: 'array',
            items: { $ref: 'sprocket' }
          }
        }
      }
    },
    listSprocketsHandler
  );

  server.get(
    '/:id',
    {
      schema: {
        params: { ...idParameter },
        response: {
          200: { $ref: 'sprocket' }
        }
      }
    },
    getSprocketsHandler
  );

  server.post(
    '/',
    {
      schema: {
        body: { $ref: 'newSprocket' },
        response: {
          200: { $ref: 'sprocket' }
        }
      }
    },
    createSprocketsHandler
  );

  server.put(
    '/:id',
    {
      schema: {
        params: { ...idParameter },
        body: { $ref: 'newSprocket' },
        response: {
          200: { $ref: 'sprocket' }
        }
      }
    },
    updateSprocketsHandler
  );
}
