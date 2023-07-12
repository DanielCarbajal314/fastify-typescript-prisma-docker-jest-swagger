import { FastifyReply, FastifyRequest } from 'fastify';
import { client } from '../../../../prisma';
import { buildCreateSprocketFn } from './createSprocket';
import { StatusCode } from '../../../shared/statusCodes';
import { createSprocketData } from './createSprocketType';
const createSprocket = buildCreateSprocketFn(client);

export const createSprocketsHandler = async (
  request: FastifyRequest,
  response: FastifyReply
) => {
  const newSprocket: createSprocketData = request.body as createSprocketData;
  const sprocket = await createSprocket(newSprocket);
  response.status(StatusCode.CreatedSuccess).send(sprocket);
};
