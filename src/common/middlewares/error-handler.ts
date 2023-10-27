import express,{Request,Response,NextFunction } from "express";
import { CustomError } from "../errors/custom-error";



export const errorHandler = (err:Error,req:Request,res:Response,next:NextFunction)=>{
    console.log("********************");
        console.log(err);
        
    if(err instanceof CustomError){
        return res.status(err.statusCode).send({erros:err.serializeErrors()})
    }

    res.status(400).send({ errors: [{ message: "Something went wrong !" }] });

}   