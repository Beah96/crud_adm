import "express-async-errors";
import express, { Application, json } from 'express'
import "dotenv/config";
import middlewares from "./middlewares";
import usersRouter from "./routers/users.routers";
import loginRouter from "./routers/login.router";
import coursesRouter from "./routers/courses.routers";


const app: Application = express()
app.use(json())

app.use("/users", usersRouter)
app.use("/login", loginRouter)
app.use("/courses", coursesRouter)

app.use(middlewares.handleError)

export default app
