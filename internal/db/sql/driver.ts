import { Knex, knex } from "knex";
import { printInfo } from "../../common/functions/print";
import Config from "./config";

export let sql: Knex;

export const runSQLDriver = async (): Promise<void> => {
    sql = knex(Config);
    await (sql.client as Knex.Client).releaseConnection(await (sql.client as Knex.Client).acquireConnection());
    printInfo("[SQL] connection has been verified");
};
