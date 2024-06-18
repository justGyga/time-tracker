import { IBaseCRUD } from "../../common/types/crud";
import { ID } from "../../common/types/id";
import { ISorting } from "../../common/types/sorting";
import { sql } from "../../db/sql/driver";
import { User } from "./entity";

export class UserRepository implements IBaseCRUD<User> {
    async isExist(id: ID): Promise<boolean> {
        const [{ count }] = await sql<User>(User.alias).where("id", id).count();
        return Boolean(Number(count));
    }

    async insert(doc: Omit<User, "id">): Promise<User> {
        return (await sql<User>(User.alias).insert(doc).returning("*"))[0];
    }

    async getById(id: ID): Promise<User | null | undefined> {
        return await sql<User>(User.alias).where("id", id).first();
    }

    async getByKey<K extends keyof User>(key: K, value: string | number | boolean): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

    async count(where?: any): Promise<Number> {
        throw new Error("Method not implemented.");
    }

    async list(limit: number, offset: number, where?: any, order?: ISorting | undefined): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

    async listAll(where?: any): Promise<User[]> {
        throw new Error("Method not implemented.");
    }

    async updateById(id: ID, doc: Partial<Omit<User, "id" | "created">>): Promise<void> {
        await sql<User>(User.alias).where("id", id).update(doc, "*");
    }

    async deleteById(id: ID | ID[]): Promise<void> {
        await sql<User>(User.alias).whereIn("id", [id].flat()).del();
    }
}
