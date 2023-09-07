import { Request, Response, NextFunction } from "express"
import format from "pg-format"
import { CourseResult, UserCourseTable } from "../interfaces"
import { client } from "../database"
import { QueryResult } from "pg"
import { AppError } from "../error"


const verifyUserInCourseId = async(
    request : Request,
    response : Response,
    next : NextFunction
): Promise <void> =>{

    const queryString : string = format(`
    SELECT * FROM "userCourses"
    WHERE "userId" = $1;`)

    const queryResult : QueryResult<UserCourseTable> = await client.query(queryString, [request.params.id])

    if(queryResult.rowCount === 0){
        throw new AppError( "No course found", 404)
    }

    return next()
}

const verifyCourseId = async(
    request : Request,
    response : Response,
    next : NextFunction
): Promise <void> =>{

    const queryString : string = format(`
    SELECT * FROM "courses"
    WHERE "id" = $1;`)

    const queryResult : CourseResult = await client.query(queryString, [request.params.courseId])

    if(queryResult.rowCount === 0){
        throw new AppError("User/course not found", 404)
    }
    
    return next()
}

const verifyUserId = async(
    request : Request,
    response : Response,
    next : NextFunction
): Promise <void> =>{

    const queryString : string = format(`
    SELECT * FROM "users"
    WHERE "id" = $1;`)

    const queryResult : CourseResult = await client.query(queryString, [request.params.userId])

    if(queryResult.rowCount === 0){
        throw new AppError("User/course not found", 404)
    }
    
    return next()
}

export {
    verifyCourseId,
    verifyUserId,
    verifyUserInCourseId
}