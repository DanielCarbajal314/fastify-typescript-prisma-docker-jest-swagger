import { FastifyReply, FastifyRequest } from 'fastify';
import { client } from '../../../../prisma';
import { buildGetFactoryFn } from './getFactory';
import { StatusCode } from '../../../shared/statusCodes';
const getFactory = buildGetFactoryFn(client);

export const getFactoryHandler = async (
  request: FastifyRequest,
  response: FastifyReply
) => {
  const factoryId = parseInt(request.params['id']);
  const factory = await getFactory(factoryId);
  return response.status(StatusCode.Success).send(factory);
};
