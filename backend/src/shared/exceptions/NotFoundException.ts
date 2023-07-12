import { FastifyReply } from 'fastify';
import { StatusCode } from '../../shared/statusCodes';

export class NotFoundException extends Error {
  code: StatusCode = StatusCode.NotFound;

  constructor(message: string = 'Resource not found') {
    super(message);
  }

  public handleReply(reply: FastifyReply) {
    const { message, code } = this;
    reply.status(code).send({ message });
  }
}
