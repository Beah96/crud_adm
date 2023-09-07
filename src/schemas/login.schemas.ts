import { userSchema } from "./users.schemas";

const loginPostSchema = userSchema.pick({
    email: true,
    password: true
})

export { loginPostSchema }