import express from "express";
import dotenv from "dotenv"
import Server from "./server";
dotenv.config();
const PORT =process.env.PORT;
let server = new Server(express());
server.createServer().listen(PORT,()=>{
    console.log(`Connected successfully on port ${PORT}`);
})