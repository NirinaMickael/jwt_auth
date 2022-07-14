import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Response ,Request } from "express";
dotenv.config();
export const  Check = (req:Request,res:Response,next:any)=>{
    try {
        const token = req.body.token || req.query.token || req.headers["x-access-token"];
        if(!token) return res.status(401).end();
        let playload;
        try{
            playload = jwt.verify(token,process.env.jwtKey as string)
            return next();
        }catch(e){
            console.log(e)
        }
    } catch (error) {
        if( error instanceof jwt.JsonWebTokenError){
            res.status(401).end();
        }else{
            return res.status(400).end();
        }
    }
}