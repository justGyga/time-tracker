import { FastifyError, FastifyReply, FastifyRequest, errorCodes } from "fastify";
import { validatorCompiler } from "fastify-type-provider-zod";
import { z } from "zod";
import { HttpStatus } from "./http-status";

export async function AppErrorPipe(ex: FastifyError, _: FastifyRequest, reply: FastifyReply) {
    if (ex.code == errorCodes.FST_ERR_VALIDATION().code && ex instanceof z.ZodError) {
        const errors = ex.issues.map(({ code: type, path: stack, message }) => ({ type, stack, message }));
        return reply.code(HttpStatus.UNPROCESSABLE_ENTITY).send({ errors });
    }

    console.error(ex);
    reply.code(HttpStatus.INTERNAL_SERVER_ERROR);
    return { message: "Oops, something went wrong" };
}

export const AppValidator = validatorCompiler;
