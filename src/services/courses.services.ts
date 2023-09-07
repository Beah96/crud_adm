import format from "pg-format"
import { Course, CourseCreate, CourseList, CourseListResult, CourseResult, UserCourseTableResult, UserPerCourseList, UserPerCourseListResult } from "../interfaces"
import { client } from "../database"
import { courseListSchema } from "../schemas/courses.schemas"
import { usersListPerCourseSchema } from "../schemas/usersPerCourse.schemas"

const createCourse = async (payload : CourseCreate) : Promise<Course> =>{

    const queryString : string = format(`
    INSERT INTO "courses"
    (%I)
    VALUES (%L)
    RETURNING *;
    `, Object.keys(payload),
    Object.values(payload)
    )

    const queryResult : CourseResult = await client.query(queryString)

    return queryResult.rows[0]
}

const getAllCourses = async (): Promise<CourseList> => {
    const queryString : string = format(`
    SELECT * FROM "courses";`)
    
    const queryResult : CourseListResult = await client.query(queryString)

    return courseListSchema.parse(queryResult.rows)
}

const enrollUserToCourse = async (courseId : string, userId : string) : Promise<object> => {
    const queryString : string = format(`
    INSERT INTO "userCourses"
    ("active", "userId", "courseId")
    VALUES (true, $1, $2);`)

    const queryResult : UserCourseTableResult = await client.query(queryString, [userId, courseId])

    return {
        "message": "User successfully vinculed to course"
    }
    
}

const deactivateUser =async (courseId : string, userId : string) : Promise<void> => {
    const queryString : string = format(`
    UPDATE "userCourses"
    SET "active" = false
        WHERE "userId" = $1
        AND "courseId" = $2;
    `)

    await client.query(queryString, [userId, courseId])
    
}

const getCourseUsers = async (courseId : string) : Promise<UserPerCourseList> => {
    const queryString : string = format(`
    SELECT 
    "u"."id" AS "userId",
    "u"."name" AS "userName",
    "c"."id" AS "courseId",
    "c"."name" AS "courseName",
    "c"."description" AS "courseDescription",
    "uC"."active" AS "userActiveInCourse"
    FROM "courses" AS "c"
    JOIN "userCourses" AS "uC"
        ON "c"."id" = "uC"."courseId"
    JOIN "users" AS "u"
        ON "u"."id" = "uC"."userId"
        WHERE "c"."id" = $1;
    `)

    const queryResult : UserPerCourseListResult = await client.query(queryString, [courseId])

    return usersListPerCourseSchema.parse(queryResult.rows)
    
}

export default { 
    createCourse, 
    getAllCourses, 
    enrollUserToCourse,
    deactivateUser, 
    getCourseUsers
}