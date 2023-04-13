"use strict";
// import express, {Request, Response, NextFunction} from 'express';
// import 'express-async-errors';
// import path from 'path';
// import { router } from './routes';
// import cors from 'cors';
// const app = express();
// app.use(cors())
// app.use(express.json());
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.use(router);
// app.use(
//   '/files',
//   express.static(path.resolve(__dirname, '..', 'tmp'))
// )
// app.use((err: Error, req: Request, res: Response, next: NextFunction) =>{
//   if(err instanceof Error){
//     // Se for uma instancia do tipo erro
//     return res.status(400).json({error: err.message})
//   }
//   return res.status(500).json({
//     status: 'error',
//     message: 'Internal server error',
//   })
// }) 
// app.listen(3333, () => {
// })
const express_1 = __importDefault(require("express"));
require("express-async-errors");
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use(routes_1.router);
app.use((err, req, res, next) => {
    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        });
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
    });
});
app.listen(process.env.PORT || 3333, () => console.log('servidor online'));
