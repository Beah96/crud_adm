import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";

const verifyUserPermission = (
    request : Request,
    response : Response,
    next : NextFunction
) : void =>{
    const { id } = request.params
    const { sub, admin } = response.locals.decoded

    if(admin) return next()

    if(sub !== id || !admin){
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}

export default verifyUserPermission