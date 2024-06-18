import { Knex } from "knex";

const Config: Knex.Config = {
    client: "pg",
    connection: {
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT || 5432),
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB
    },
    migrations: {
        tableName: "changeLog"
    }
};

export default Config;
module.exports = Config;
