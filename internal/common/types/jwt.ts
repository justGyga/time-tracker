import { ID } from "./id";

export interface IJwt {
    id: ID;
    session?: string;
    iat?: number;
    exp?: number;
}
