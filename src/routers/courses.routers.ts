import { Router } from "express";
import middlewares from "../middlewares";
import { courseCreateSchema } from "../schemas/courses.schemas";
import { coursesControllers } from "../controllers";

const coursesRouter : Router = Router()

coursesRouter.post(
    "",
    middlewares.validateBody(courseCreateSchema),
    middlewares.verifyToken,
    middlewares.verifyUserPermission,
    coursesControllers.createCourse
)

coursesRouter.get("", coursesControllers.getAllCourses)

coursesRouter.post(
    "/:courseId/users/:userId",
    middlewares.verifyToken,
    middlewares.verifyUserPermission,
    middlewares.verifyCourseId,
    middlewares.verifyUserId,
    coursesControllers.enrollUserToCourse

)

coursesRouter.delete(
    "/:courseId/users/:userId",
    middlewares.verifyToken,
    middlewares.verifyUserPermission,
    middlewares.verifyCourseId,
    middlewares.verifyUserId,
    coursesControllers.deactivateUser

)

coursesRouter.get(
    "/:id/users",
    middlewares.verifyToken,
    middlewares.verifyUserPermission,
    coursesControllers.getCourseUsers
    
)

export default coursesRouter