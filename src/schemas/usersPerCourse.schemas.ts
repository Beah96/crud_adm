import { z } from "zod";

const usersPerCourseSchema = z.object({
    userId: z.number().positive(),
    userName: z.string().max(50),
    courseId: z.number().positive(),
    courseName: z.string().max(15),
    courseDescription: z.string(),
    userActiveInCourse: z.boolean().default(true),
})

const usersListPerCourseSchema = usersPerCourseSchema.array()

export {
    usersPerCourseSchema,
    usersListPerCourseSchema
}