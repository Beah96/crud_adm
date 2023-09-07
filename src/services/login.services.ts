import { sign } from "jsonwebtoken";
import { LoginPost, LoginReturn, User, UserResult } from "../interfaces";
import format from "pg-format";
import { client } from "../database";
import { AppError } from "../error";
import { compare } from "bcryptjs";

const login = async ( payload : LoginPost) : Promise<LoginReturn> =>{
    const queryString : string = format(`
    SELECT * FROM "users"
    WHERE "email" = $1;`)

    const queryResult : UserResult = await client.query(queryString, [payload.email])

    if(queryResult.rowCount === 0){
        throw new AppError("Wrong email/password", 401)
    }

    const user : User = queryResult.rows[0]
    
    const samePassword : boolean = await compare(payload.password, user.password)

    if(!samePassword){
        throw new AppError("Wrong email/password", 401)
    }

    const token : string = sign(
        {username: user.name, admin: user.admin},
        process.env.SECRET_KEY!,
        {subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN!}
    )
    return { token }
}

export default { login }