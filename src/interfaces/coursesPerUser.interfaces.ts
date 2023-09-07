import { z } from "zod";
import {coursePerUserSchema, courseListPerUserSchema } from "../schemas/coursesPerUser.schemas";
import { QueryResult } from "pg";

type CoursePerUser = z.infer<typeof coursePerUserSchema>

type CoursePerUserListResult = QueryResult<CoursePerUser[]>

type CoursePerUserList = z.infer<typeof courseListPerUserSchema>


export {
    CoursePerUser,
    CoursePerUserList,
    CoursePerUserListResult,
}