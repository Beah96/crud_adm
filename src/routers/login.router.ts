import { Router } from "express";
import middlewares from "../middlewares";
import { loginPostSchema } from "../schemas/login.schemas";
import { loginController } from "../controllers";

const loginRouter : Router = Router()

loginRouter.post("", 
    middlewares.validateBody(loginPostSchema),
    loginController.login
)

export default loginRouter