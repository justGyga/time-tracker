import { IRepositoryManager } from "../../common/types/crud";
import { ID } from "../../common/types/id";
import { IPaginationResponse } from "../../common/types/pagination";
import { ISorting } from "../../common/types/sorting";
import { sql } from "../../db/sql/driver";
import { User } from "./entity";
import { IUserCreate } from "./interface";
import { UserRepository } from "./repository";

export abstract class UserManager implements IRepositoryManager<User> {
    private readonly repository: UserRepository;
    constructor() {
        this.repository = new UserRepository();
    }

    async exist(id: ID): Promise<boolean> {
        return await this.repository.isExist(id);
    }

    async create(doc: IUserCreate): Promise<User> {
        return await this.repository.insert({ ...doc, created: new Date() });
    }

    async getOne(id: ID): Promise<User | null | undefined> {
        return await this.repository.getById(id);
    }

    async getMany(id: ID[]): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

    async getList(filter?: any, reduce?: { limit: number; offset: number } | undefined): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

    async getCountedList(limit: number, offset: number, filter?: any, order?: ISorting | undefined): Promise<IPaginationResponse<User>> {
        throw new Error("Method not implemented.");
    }

    async updateOne(id: ID, doc: Partial<Omit<User, "id" | "created">>): Promise<User | null | undefined> {
        await this.repository.updateById(id, doc);
        return await this.repository.getById(id);
    }

    async delete(id: ID | ID[]): Promise<void> {
        await this.repository.deleteById(id);
    }

    async isExistByEMail(email: string): Promise<Boolean> {
        const [{ count }] = await sql<User>(User.alias).where("email", email).count();
        return Boolean(Number(count));
    }
}

class Manager extends UserManager {}
export const UserManagerInstance = new Manager();
