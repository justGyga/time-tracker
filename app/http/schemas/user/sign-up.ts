import { FastifySchema } from "fastify";
import { z } from "zod";

const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().max(100)
});

export const signUp: FastifySchema = { body: schema };
