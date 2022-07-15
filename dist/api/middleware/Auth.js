"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Check = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var Check = function (req, res, next) {
    var token = req.headers.token;
    try {
        if (!token)
            return res.status(401).end();
        var playload = void 0;
        try {
            playload = jsonwebtoken_1.default.verify(token, process.env.jwtKey);
            return next();
        }
        catch (error) {
            if (error instanceof jsonwebtoken_1.default.JsonWebTokenError) {
                return res.status(401).end();
            }
            else {
                return res.status(400).end();
            }
        }
    }
    catch (error) {
        res.send('ldskjds');
    }
};
exports.Check = Check;
