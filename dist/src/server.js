"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var jwt_route_1 = __importDefault(require("../api/routes/jwt.route"));
var http_1 = __importDefault(require("http"));
var Server = /** @class */ (function () {
    function Server(app) {
        this.app = app;
        this.useMiddlaWare(app);
        this.useRoute(app);
    }
    Server.prototype.createServer = function () {
        return http_1.default.createServer(this.app);
    };
    Server.prototype.useMiddlaWare = function (app) {
        app.use(express_1.default.json());
        app.use(express_1.default.static("".concat(__dirname, "/public")));
        app.use(express_1.default.static("".concat(__dirname, "/views")));
        app.use("/public", express_1.default.static("public"));
        app.set("views", "./views");
        app.set("view engine", "ejs");
    };
    Server.prototype.useRoute = function (app) {
        app.use("/", jwt_route_1.default);
    };
    Server.prototype.handlingCors = function () { };
    return Server;
}());
exports.default = Server;
