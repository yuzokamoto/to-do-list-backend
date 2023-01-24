import { knex } from "knex"

export const db = knex({
    client: "sqlite3",
    connection: {
        filename: "./src/database/to-do-list.db",
    },
    useNullAsDefault: true,
    pool: { 
        min: 0,
        max: 1,
        // ativando o check de constraint das chaves estrangeiras
        afterCreate: (conn: any, cb: any) => {
            conn.run("PRAGMA foreign_keys = ON", cb)
        }
    }
})