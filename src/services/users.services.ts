import format from "pg-format"
import { UserCreate,
    CoursePerUserList,
    CoursePerUserListResult,
    UserListResult, 
    UserListReturn, 
    UserResult, 
    UserReturn } from "../interfaces"
import { client } from "../database"
import { userListSchema, userReturnSchema } from "../schemas/users.schemas"
import { hash } from "bcryptjs"
import { courseListPerUserSchema } from "../schemas/coursesPerUser.schemas"

const createUser =  async ( payload : UserCreate) : Promise<UserReturn>=>{

    payload.password = await hash(payload.password, 10)

    const queryString : string = format(`
    INSERT INTO "users"
    (%I)
    VALUES (%L)
    RETURNING *;
    `,Object.keys(payload),
    Object.values(payload)
    )

    const queryResult : UserResult = await client.query(queryString)

    return userReturnSchema.parse(queryResult.rows[0])
}

const getAllUsers = async () : Promise<UserListReturn> => {
    const queryString : string = format(`
    SELECT * FROM "users";`)

    const queryResult : UserListResult = await client.query(queryString)
    
    return userListSchema.parse(queryResult.rows)
    
}

const getUserCourses =async (userId : string) : Promise<CoursePerUserList> => {
    const queryString : string = format(`
    SELECT 
    "c"."id" AS "courseId",
    "c"."name" AS "courseName",
    "c"."description" AS "courseDescription",
    "uC"."active" AS "userActiveInCourse",
    "u"."id" AS "userId",
    "u"."name" AS "userName"
    FROM "users" AS "u"
    JOIN "userCourses" AS "uC"
        ON "u"."id" = "uC"."userId"
    JOIN "courses" AS "c"
        ON "c"."id" = "uC"."courseId"
        WHERE "u"."id" = $1;
    `)

    const queryResult : CoursePerUserListResult = await client.query(queryString, [userId])

    return courseListPerUserSchema.parse(queryResult.rows)
}



export default {
    createUser,
    getAllUsers,
    getUserCourses
}