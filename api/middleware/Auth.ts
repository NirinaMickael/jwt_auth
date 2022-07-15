import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { Request ,Response } from "express";
dotenv.config();
export const  Check = (req:Request,res:Response,next:any)=>{
    const token = req.headers.token as string;
    try {
        if(!token) return res.status(401).end();
        let playload;
        try{
            playload = jwt.verify(token,process.env.jwtKey as string)
            return next();
        }catch(error){
            if( error instanceof jwt.JsonWebTokenError){
                return res.status(401).end();
            }else{
                return res.status(400).end();
            }
        }
    } catch (error) {
        res.send('ldskjds')
    }
}