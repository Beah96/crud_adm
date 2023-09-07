import { z } from "zod";
import { userCreateSchema, userListSchema, userReturnSchema, userSchema } from "../schemas/users.schemas";
import { QueryResult } from "pg";

type User = z.infer<typeof userSchema>

type UserCreate = z.infer<typeof userCreateSchema>

type UserResult = QueryResult<User>

type UserListResult = QueryResult<UserResult[]>

type UserReturn = z.infer<typeof userReturnSchema>

type UserListReturn = z.infer< typeof userListSchema>

export {
    User,
    UserCreate,
    UserResult, 
    UserReturn,
    UserListResult,
    UserListReturn 
}