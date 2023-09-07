import { z } from "zod";
import { courseCreateSchema, courseSchema } from "../schemas/courses.schemas";
import { QueryResult } from "pg";

type Course = z.infer<typeof courseSchema>

type CourseCreate = z.infer<typeof courseCreateSchema>

type CourseResult = QueryResult<Course>

type CourseList = Course[]

type CourseListResult = QueryResult<Course[]>

export {
    Course,
    CourseCreate,
    CourseResult,
    CourseList,
    CourseListResult
}