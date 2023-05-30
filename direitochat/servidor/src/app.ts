import cookieParser from "cookie-parser"
import { json } from "express"
import { AppDataSource } from "./data-source"
import routes from "./routes"

const expres = require("express")
const app = expres()

AppDataSource.initialize().then(() => {
    app.listen(3000, () => {
        app.use(json())
        app.use(cookieParser())
        app.use(routes)
        console.log("http://localhost:3000/")
    })
})
