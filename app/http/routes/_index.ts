import { FastifyInstance } from "fastify";
import { userProvider } from "./user";

interface IProvider {
    instance: (app: FastifyInstance) => Promise<void>;
    prefix: string;
}

export const HttpProvider: Array<IProvider> = [{ instance: userProvider, prefix: "user" }];
