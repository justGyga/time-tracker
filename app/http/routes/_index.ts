import { FastifyInstance } from "fastify";

interface IProvider {
    instance: (app: FastifyInstance) => Promise<void>;
    prefix: string;
}

export const HttpProvider: Array<IProvider> = [];
