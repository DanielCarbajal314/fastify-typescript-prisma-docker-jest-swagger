import { FastifyReply, FastifyRequest } from 'fastify';
import { client } from '../../../../prisma';
import { buildListSprocketFn } from './listSprockets';
import { StatusCode } from '../../../shared/statusCodes';
const listSprocket = buildListSprocketFn(client);

export const listSprocketsHandler = async (
  request: FastifyRequest,
  response: FastifyReply
) => response.status(StatusCode.Success).send(await listSprocket());
