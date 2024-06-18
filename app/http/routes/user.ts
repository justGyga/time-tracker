import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { userController } from "../controllers/user";
import { signUp } from "../schemas/user/sign-up";

const signRouter: FastifyPluginAsync = async (app: FastifyInstance) => {
    app.post("/up", { schema: signUp }, userController.signUp);
};

export const userProvider = async (app: FastifyInstance) => {
    app.register(signRouter, { prefix: "/sign" });
};
