import { z } from "zod";
import { usersListPerCourseSchema, usersPerCourseSchema } from "../schemas/usersPerCourse.schemas";
import { QueryResult } from "pg";

type UserPerCourse = z.infer<typeof usersPerCourseSchema>

type UserPerCourseListResult = QueryResult<UserPerCourse[]>

type UserPerCourseList = z.infer<typeof usersListPerCourseSchema>

export {
    UserPerCourse,
    UserPerCourseList, 
    UserPerCourseListResult
}