import fastifyAuth from "@fastify/auth";
import fastifyCors from "@fastify/cors";
import fastifyJwt from "@fastify/jwt";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { FastifyInstance, fastify } from "fastify";
import { AppErrorPipe, AppValidator } from "../app/http/config/pipe";
import { swaggerOption, swaggerUiOption } from "../app/http/config/swagger";
import { HttpProvider } from "../app/http/routes/_index";

export const app: FastifyInstance = fastify();

export const runHttpServer = async (): Promise<void> => {
    const PORT = Number(process.env.PORT || 5000);
    await app.register(fastifyCors, { origin: true, credentials: true });
    app.register(fastifyAuth, { defaultRelation: "and" });
    app.register(fastifyJwt, { secret: String(process.env.TOKEN_SECRET) });
    app.register(fastifySwagger, swaggerOption);
    app.register(fastifySwaggerUi, swaggerUiOption);
    app.setValidatorCompiler(AppValidator);
    app.setErrorHandler(AppErrorPipe);

    HttpProvider.forEach((router) => app.register(router.instance, { prefix: router.prefix }));
    await app.listen({ host: "0.0.0.0", port: PORT });
    console.info(`[Http] app is running on port ${PORT}`);
};
