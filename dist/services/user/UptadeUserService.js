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
exports.UptadeUserService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UptadeUserService {
    execute({ user_id, name, endereco }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userAlreadyExists = yield prisma_1.default.user.findFirst({
                    where: {
                        id: user_id
                    }
                });
                if (!userAlreadyExists) {
                    throw new Error("Usuário não existe");
                }
                const userUptade = yield prisma_1.default.user.update({
                    where: {
                        id: user_id
                    },
                    data: {
                        name,
                        endereco,
                    },
                    select: {
                        name: true,
                        email: true,
                        endereco: true
                    }
                });
                return userUptade;
            }
            catch (err) {
                throw new Error("Erro na atualização do usuário");
            }
        });
    }
}
exports.UptadeUserService = UptadeUserService;
