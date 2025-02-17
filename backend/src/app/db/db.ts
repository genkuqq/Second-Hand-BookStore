import { Sequelize } from "sequelize"

export const database = new Sequelize({
    database: "te",
    username: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    dialect: "postgres",
})
