import { FastifyReply, FastifyRequest } from 'fastify';
import { client } from '../../../../prisma';
import { buildGetSprocketFn } from './getSprocket';
import { StatusCode } from '../../../shared/statusCodes';
const getSprocket = buildGetSprocketFn(client);

export const getSprocketsHandler = async (
  request: FastifyRequest,
  response: FastifyReply
) => {
  const sprocketId = parseInt(request.params['id']);
  const sprocket = await getSprocket(sprocketId);
  return response.status(StatusCode.Success).send(sprocket);
};
