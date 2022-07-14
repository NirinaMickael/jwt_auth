import { Router ,Request,Response} from "express";
import { RenderHomePage, SignUser } from "../controllers/jwt.controler";
const tictacRoute = Router();

tictacRoute.get('/',(req:Request,res:Response)=>{
    RenderHomePage(req,res)
})

tictacRoute.post('/sign',(req:Request,res:Response)=>{
    SignUser(req,res);
})

export default tictacRoute;
