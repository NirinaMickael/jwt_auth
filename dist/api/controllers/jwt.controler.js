"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = exports.SignUser = exports.RenderHomePage = void 0;
var DataBase_1 = require("../config/DataBase");
var form_1 = require("../models/form");
var dotenv_1 = __importDefault(require("dotenv"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcrypt_1 = __importDefault(require("bcrypt"));
dotenv_1.default.config();
var db = new DataBase_1.ConnnectDataBase();
DataBase_1.ConnnectDataBase.open();
var RenderHomePage = function (req, res) {
    res.render('index');
};
exports.RenderHomePage = RenderHomePage;
var SignUser = function (req, res) {
    var email = req.body.email;
    var password = req.body.password;
    // tester si l'utilisateur est deja 'authentifié
    var test = form_1.Database.some(function (value) { return value.email == email && value.password == password; });
    if (test) {
        // create a new token with usename in the playload
        //and which expires 300 seconds after issue
        var token = jsonwebtoken_1.default.sign({ email: email, password: password }, process.env.jwtKey, {
            algorithm: 'HS256',
            expiresIn: parseInt(process.env.jwtExpirySeconds) * 100
        });
        // console.log('token',token);
        // set the cookue as the token string,with a similar max age is 
        // the token
        res.cookie("token", token, { maxAge: parseInt(process.env.jwtExpirySeconds) });
        res.end();
    }
    else {
        return res.status(400).end();
    }
};
exports.SignUser = SignUser;
var Register = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, repassword, salt, validPassword, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, email = _a.email, password = _a.password, repassword = _a.repassword;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 8, , 9]);
                if (!(email != "" && password != "" && repassword != "")) return [3 /*break*/, 6];
                if (!(/@.+/g.test(email) && password == repassword)) return [3 /*break*/, 4];
                return [4 /*yield*/, bcrypt_1.default.genSalt(10)];
            case 2:
                salt = _b.sent();
                return [4 /*yield*/, bcrypt_1.default.hash(password, salt)];
            case 3:
                validPassword = _b.sent();
                res.status(201).send(validPassword).end();
                return [3 /*break*/, 5];
            case 4:
                res.status(300).send('invalid passord or email');
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                res.status(401).send('fill field');
                _b.label = 7;
            case 7:
                res.end();
                return [3 /*break*/, 9];
            case 8:
                error_1 = _b.sent();
                res.status(500).send('error');
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.Register = Register;
