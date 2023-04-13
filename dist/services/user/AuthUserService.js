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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthUserService {
    execute({ email, password }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // verificar se o email ja existe
            const user = yield prisma_1.default.user.findFirst({
                where: {
                    email: email
                },
                include: {
                    subscriptions: true
                }
            });
            if (!user) {
                throw new Error("usuario não existe");
            }
            ;
            //preciso verificar se a senha está correta
            const passwordMatch = yield (0, bcryptjs_1.compare)(password, user === null || user === void 0 ? void 0 : user.password);
            if (!passwordMatch) {
                throw new Error("usuario não existe");
            }
            //gerar token JWT
            const token = (0, jsonwebtoken_1.sign)({
                name: user.name,
                email: user.email,
            }, process.env.JWT_SECRET, {
                subject: user.id,
                expiresIn: '30d',
            });
            return {
                id: user === null || user === void 0 ? void 0 : user.id,
                name: user === null || user === void 0 ? void 0 : user.name,
                email: user === null || user === void 0 ? void 0 : user.email,
                endereco: user === null || user === void 0 ? void 0 : user.endereco,
                token: token,
                subscription: user.subscriptions ? {
                    id: (_a = user === null || user === void 0 ? void 0 : user.subscriptions) === null || _a === void 0 ? void 0 : _a.id,
                    status: user === null || user === void 0 ? void 0 : user.subscriptions.status
                } : null
            };
        });
    }
}
exports.AuthUserService = AuthUserService;
