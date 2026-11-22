import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync.js";
import { authService } from "./auth.service.js";
import { ApiResponse } from "../../utils/apiResponse.js";

const login = catchAsync (async (req:Request , res:Response) =>{
    const { email, password } = req.body;
    const result = authService.login({email,password})
    ApiResponse.success(res,result, "Login successful")
})

export const authController = {
    login,
}