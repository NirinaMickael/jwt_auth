"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var jwt_controler_1 = require("../controllers/jwt.controler");
var Auth_1 = require("../middleware/Auth");
var tictacRoute = (0, express_1.Router)();
tictacRoute.get('/', Auth_1.Check, function (req, res) {
    (0, jwt_controler_1.RenderHomePage)(req, res);
});
tictacRoute.post('/sign', function (req, res) {
    (0, jwt_controler_1.SignUser)(req, res);
});
exports.default = tictacRoute;
