import { QueryResult } from "pg"

type UserCourseTable = {
    id: number,
    active: boolean,
    userId: number,
    courseId: number
}

type UserCourseTableResult = QueryResult<UserCourseTable>

export { UserCourseTable, UserCourseTableResult }