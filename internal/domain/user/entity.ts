import { ID } from "../../common/types/id";

export class User {
    constructor(
        readonly id: ID,
        readonly name: string,
        readonly email: string,
        readonly password: string,
        readonly created: Date
    ) {}

    static alias = "users";
}
