import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTableIfNotExists("users", (tb) => {
        tb.uuid("id").defaultTo(knex.fn.uuid()).primary();
        tb.string("name").notNullable();
        tb.string("email", 100).notNullable().unique();
        tb.string("password").notNullable();
        tb.timestamp("created").notNullable().defaultTo(knex.fn.now());
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("users");
}
