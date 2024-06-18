import argon2 from "argon2";
import Autobind from "autobind-decorator";
import { FastifyReply, FastifyRequest } from "fastify";
import { HandlingErrorType } from "../../../internal/common/enums/errors";
import { StorageNS } from "../../../internal/common/enums/namespaces";
import { makeUUID } from "../../../internal/common/handlers/generation-factory";
import { IJwt } from "../../../internal/common/types/jwt";
import { redis } from "../../../internal/db/redis/driver";
import { IUserCreate } from "../../../internal/domain/user/interface";
import { UserManager, UserManagerInstance } from "../../../internal/domain/user/manager";
import { IHandlingResponseError } from "../config/http-response";
import { HttpStatus } from "../config/http-status";

@Autobind
class Controller {
    constructor(private readonly userManager: UserManager) {}

    async signUp(req: FastifyRequest<{ Body: IUserCreate }>, reply: FastifyReply) {
        const isUserExist = await this.userManager.isExistByEMail(req.body.email);
        if (isUserExist) {
            const info: IHandlingResponseError = { property: "user", type: HandlingErrorType.Unique, message: "That's email is already busy!!!" };
            return reply.code(HttpStatus.BAD_REQUEST).send(info);
        }
        const hashedPassword = await argon2.hash(req.body.password);
        const user = await this.userManager.create({ ...req.body, password: hashedPassword });

        const sessionKey = makeUUID();
        const jwtPayload: IJwt = { id: user.id, session: sessionKey };
        const token = await reply.jwtSign(jwtPayload, { expiresIn: Number(process.env.TOKEN_EXPIRE) });
        await redis.set(`${StorageNS.Users}:${user.id}:${StorageNS.Sessions}:${sessionKey}`, "", "EX", Number(process.env.TOKEN_EXPIRE));
        reply.code(HttpStatus.CREATED).send({ token });
    }
}

export const userController = new Controller(UserManagerInstance);
