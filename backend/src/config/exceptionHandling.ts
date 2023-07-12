import { FastifyInstance } from 'fastify';
import { NotFoundException } from '../shared/exceptions/NotFoundException';
import { StatusCode } from '../shared/statusCodes';
import { v4 as uuidv4 } from 'uuid';

export const setupExceptionHandling = (server: FastifyInstance) => {
  server.setErrorHandler((error, request, reply) => {
    if (error instanceof NotFoundException) {
      const exception = error as NotFoundException;
      exception.handleReply(reply);
    } else {
      const errorIdentifier = uuidv4();
      server.log.error(`Error Id : ${errorIdentifier}`);
      server.log.error(error);
      reply
        .status(StatusCode.InternalError)
        .send({ message: `Internal Server Error. Code: ${errorIdentifier}` });
    }
  });
};
