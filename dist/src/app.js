"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var server_1 = __importDefault(require("./server"));
dotenv_1.default.config();
var PORT = process.env.PORT;
var uri = "mongodb+srv://Mickael:55zDxhTbEZuPf6Hi@newcluster.aqemw.mongodb.net/?retryWrites=true&w=majority";
var server = new server_1.default((0, express_1.default)());
server.createServer().listen(PORT, function () {
    console.log("Connected successfully on port ".concat(PORT));
});
