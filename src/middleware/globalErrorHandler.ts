import { NextFunction, Request, Response } from "express";
import { ErrorResponse } from "../types/index.js";
import { env } from "../config/env.config.js";

export const globalErrorHandler =(
    err:any,
    req:Request,
    res:Response,
    next:NextFunction
) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Something went wrong";
    const response: ErrorResponse = {
        success: false,
        message,
    }

    if (env.node_enviroment === "development"){
        response.stack = err.stack;
        response.error = err;
    }
    res.status(statusCode).json(response)
}

