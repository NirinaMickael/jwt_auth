import express,{ Application } from 'express';
import tictacRoute from '../api/routes/jwt.route';
import http from 'http'

class Server{
    app: Application;
    constructor(app:Application){
        this.app =  app;
        this.useMiddlaWare(app);
        this.useRoute(app);
    }
    createServer(){
        return  http.createServer(this.app);
    }
    useMiddlaWare(app:Application){    
        app.use(express.json());
        app.use(express.static(`${__dirname}/public`));
        app.use(express.static(`${__dirname}/views`));
        app.use('/public',express.static('public'));
        app.set('views','./views')
        app.set('view engine','ejs');
    }
    useRoute(app:Application){
        app.use('/',tictacRoute);
    }
    handlingCors(){

    }
}
export default Server;