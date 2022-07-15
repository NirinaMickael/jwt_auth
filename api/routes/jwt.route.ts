import { Router ,Request,Response} from "express";
import { Register, RenderHomePage, SignUser } from "../controllers/jwt.controler";
import { Check } from "../middleware/Auth";
const tictacRoute = Router();

tictacRoute.get('/',Check,(req:Request,res:Response)=>{
    RenderHomePage(req,res)
})

tictacRoute.get('/sign',(req:Request,res:Response)=>{
    SignUser(req,res);
})

tictacRoute.post('/register',(req:Request,res:Response)=>{
    Register(req,res);
})
export default tictacRoute;
