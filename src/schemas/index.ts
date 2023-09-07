import { 
    userSchema, 
    userCreateSchema, 
    userReturnSchema,  
    userListSchema 
} from "./users.schemas";
import { loginPostSchema } from "./login.schemas";
import {  coursePerUserSchema, courseListPerUserSchema } from "./coursesPerUser.schemas";
import { courseSchema,
    courseCreateSchema,
    courseListSchema, } from "./courses.schemas"; 
import { usersPerCourseSchema, usersListPerCourseSchema } from "./usersPerCourse.schemas";

export default {
    userSchema,
    userCreateSchema, 
    userReturnSchema,
    userListSchema,
    loginPostSchema,
    coursePerUserSchema,
    courseListPerUserSchema,
    courseSchema,
    courseCreateSchema,
    courseListSchema,
    usersPerCourseSchema,
    usersListPerCourseSchema
}