import { MongoClient } from 'mongodb';
import express from "express";
import dotenv from "dotenv"
import Server from "./server";
dotenv.config();
const PORT =process.env.PORT;
const uri = "mongodb+srv://Mickael:55zDxhTbEZuPf6Hi@newcluster.aqemw.mongodb.net/?retryWrites=true&w=majority";
let server = new Server(express());
server.createServer().listen(PORT,()=>{
    console.log(`Connected successfully on port ${PORT}`);
})