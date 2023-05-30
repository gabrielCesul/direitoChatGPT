import dotenv from "dotenv"
import { DataSource } from "typeorm"
import "reflect-metadata"
import { User_account } from "./model/User_account"

import { Default1684857381116 as migration } from "../src/migrations/1684857381116-default"

dotenv.config()
const port = process.env.DB_DOOR as number | undefined

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATA,
    entities: [User_account],
    migrations: [migration],
})
