import { z } from "zod";
import { loginPostSchema } from "../schemas/login.schemas";

type LoginPost = z.infer<typeof loginPostSchema>
type LoginReturn = { token : string}

export { LoginPost, LoginReturn}