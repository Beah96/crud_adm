import { NextFunction, Request, Response } from "express";
import format from "pg-format";
import { UserResult } from "../interfaces";
import { client } from "../database";
import { AppError } from "../error";


const verifyEmail = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {

    const queryString: string = format(`
    SELECT * FROM "users"
    WHERE email = $1;
    `)

    const queryResult: UserResult = await client.query(queryString, [request.body.email])

    if (queryResult.rowCount) {
        throw new AppError("Email already registered", 409)
    }

    return next()
}

export default verifyEmail 