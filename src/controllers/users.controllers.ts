import { Request, Response } from "express";
import { CoursePerUserList, UserListReturn, UserReturn } from "../interfaces";
import { usersServices } from "../services";

const createUser = async (request : Request, response : Response) : Promise<Response> =>{
    const user : UserReturn = await usersServices.createUser(request.body)

    return response.status(201).json(user)
}

const getAllUsers = async (request : Request, response : Response) : Promise<Response> =>{
    const usersList : UserListReturn = await usersServices.getAllUsers()
    return response.status(200).json(usersList)
}

const getUserCourses =async (request : Request, response : Response) : Promise<Response>  => {

    const userCoursesList : CoursePerUserList = await usersServices.getUserCourses(request.params.id)

    return response.status(200).json(userCoursesList)
}

export default {
    createUser,
    getAllUsers,
    getUserCourses
}