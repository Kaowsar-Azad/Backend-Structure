import express, { Application, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";


export const app:Application = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true}));


app.get("/", (rec:Request , res:Response) => {
    console.log("👉 কেউ একজন আমাদের সার্ভারের রুট রাউটে হিট করেছে!");
    res.send({
        success:true,
        message:"Server is running on port 5000",
    })
})