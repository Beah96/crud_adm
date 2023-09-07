import { Request, Response } from "express";
import { Course, CourseList, UserPerCourseList } from "../interfaces";
import { coursesServices } from "../services";

const createCourse = async (request : Request, response : Response) : Promise<Response> =>{
    const course : Course = await coursesServices.createCourse(request.body)
    return response.status(201).json(course)
}

const getAllCourses = async (request : Request, response : Response) : Promise<Response> =>{
    const courseList : CourseList = await coursesServices.getAllCourses()

    return response.status(200).json(courseList)
}

const enrollUserToCourse = async (request : Request, response : Response) : Promise<Response> => {
    const userId = request.params.userId
    const courseId = request.params.courseId

    const enrollUser : object = await coursesServices.enrollUserToCourse(courseId, userId)

    return response.status(201).json(enrollUser)
    
}

const deactivateUser = async (request : Request, response : Response) : Promise<Response> =>{
    const userId = request.params.userId
    const courseId = request.params.courseId

    await coursesServices.deactivateUser(courseId, userId)

    return response.status(204).json()
}

const getCourseUsers = async (request : Request, response : Response) : Promise<Response> =>{
    const courseUsersList : UserPerCourseList = await coursesServices.getCourseUsers(request.params.id)

    return response.status(200).json(courseUsersList)
}

export default {
    createCourse,
    getAllCourses,
    enrollUserToCourse,
    deactivateUser,
    getCourseUsers
}