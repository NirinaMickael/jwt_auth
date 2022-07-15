import dotenv from 'dotenv';
import { Request,Response} from 'express';
import { Database } from "../models/form";
import jwt from "jsonwebtoken"
import brycpt from 'bcrypt'
dotenv.config()
export const  RenderHomePage = (req:Request,res:Response)=>{
   res.render('index')
}

export const SignUser = (req:Request,res:Response)=>{
   const email = req.body.email;
   const password = req.body.password;
   // tester si l'utilisateur est deja 'authentifié
   let test = Database.some(value=>value.email==email && value.password==password);

   if(test){
      // create a new token with usename in the playload
      //and which expires 300 seconds after issue
      const token = jwt.sign({email,password},process.env.jwtKey as string,{
         algorithm:'HS256',
         expiresIn:parseInt(process.env.jwtExpirySeconds as string) *100
      })
      // console.log('token',token);
      // set the cookue as the token string,with a similar max age is 
      // the token
      
      res.cookie("token",token,{maxAge:parseInt(process.env.jwtExpirySeconds as string) });
      res.end();
   }else{
      return res.status(400).end();
   }
} 

export const Register = async(req:Request, res:Response)=>{
   let {email,password,repassword} = req.body;
   if( email!="" && password!="" && repassword!=""){
      if( /@.+/g.test(email) && password==repassword){
         const salt = await brycpt.genSalt(10)
         const validPassword = await brycpt.hash(password,salt);
         res.status(201).send(validPassword).end();
      }else{
         res.status(300).send('invalid passord or email')
      }
   }else{
      res.status(401).send('fill field');
   }
   res.end();
}