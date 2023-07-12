import { FastifyReply, FastifyRequest } from 'fastify';
import { client } from '../../../../prisma';
import { buildUpdateSprocketFn } from './updateSprockets';
import { StatusCode } from '../../../shared/statusCodes';
import { createSprocketData } from '../createSprocket/createSprocketType';
const createSprocket = buildUpdateSprocketFn(client);

export const updateSprocketsHandler = async (
  request: FastifyRequest,
  response: FastifyReply
) => {
  const id = parseInt(request.params['id']);
  const newSprocket: createSprocketData = request.body as createSprocketData;
  const updatedSprocket = await createSprocket({ id, ...newSprocket });
  return response.status(StatusCode.CreatedSuccess).send(updatedSprocket);
};
