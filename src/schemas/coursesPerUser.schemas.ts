import { z } from "zod";

const coursePerUserSchema = z.object({
    courseId: z.number().positive(),
    courseName: z.string().max(15),
    courseDescription: z.string(),
    userActiveInCourse: z.boolean().default(true),
    userId: z.number().positive(),
    userName: z.string().max(50)
})

const courseListPerUserSchema = coursePerUserSchema.array()


export {
    coursePerUserSchema,
    courseListPerUserSchema
}