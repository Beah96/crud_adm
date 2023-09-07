import { Router } from "express";
import middlewares from "../middlewares";
import { userCreateSchema } from "../schemas/users.schemas";
import { usersControllers } from "../controllers";

const usersRouter : Router = Router()

usersRouter.post(
    "",
    middlewares.validateBody(userCreateSchema),
    middlewares.verifyEmail,
    usersControllers.createUser
)

usersRouter.get(
    "",
    middlewares.verifyToken,
    middlewares.verifyUserPermission,
    usersControllers.getAllUsers
)

usersRouter.get(
    "/:id/courses",
    middlewares.verifyToken,
    middlewares.verifyUserPermission,
    middlewares.verifyUserInCourseId,
    usersControllers.getUserCourses
)


export default usersRouter