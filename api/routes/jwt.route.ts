import { Router ,Request,Response} from "express";
import { RenderHomePage, SignUser } from "../controllers/jwt.controler";
import { Check } from "../middleware/Auth";
const tictacRoute = Router();

tictacRoute.get('/',Check,(req:Request,res:Response)=>{
    RenderHomePage(req,res)
})

tictacRoute.post('/sign',(req:Request,res:Response)=>{
    SignUser(req,res);
})

export default tictacRoute;
