"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignUser = exports.RenderHomePage = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var form_1 = require("../models/form");
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
var RenderHomePage = function (req, res) {
    res.render('index');
};
exports.RenderHomePage = RenderHomePage;
var SignUser = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    var test = form_1.Database.some(function (value) { return value.email == email && value.password == password; });
    if (test) {
        // create a new token with usename in the playload
        //and which expires 300 seconds after issue
        var token = jsonwebtoken_1.default.sign({ email: email, password: password }, process.env.jwtKey, {
            algorithm: 'HS256',
            expiresIn: parseInt(process.env.jwtExpirySeconds) * 100
        });
        console.log('token', token);
        // set the cookue as the token string,with a similar max age is 
        // the token
        res.cookie("token", token, { maxAge: 3921 });
        res.end();
    }
    else {
        return res.status(400).end();
    }
};
exports.SignUser = SignUser;
