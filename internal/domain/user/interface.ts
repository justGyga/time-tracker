import { DefaultMeta } from "../../common/types/app-helpers";
import { WhereBuilderFactory } from "../../common/types/sql";
import { User } from "./entity";

export type UserWhereBuilder = WhereBuilderFactory<User>;

export type UserSystemMeta = DefaultMeta;
