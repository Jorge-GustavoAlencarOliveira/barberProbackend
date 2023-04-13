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
exports.CreateHaircutService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
//Verificar quantos modelos de corte esse usuario ja tem
// Verificar se o usuario é premium
class CreateHaircutService {
    execute({ name, price, user_id }) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!name || !price) {
                throw new Error('preencha os campos');
            }
            //Verificar quantos modelos de corte esse usuario ja tem
            const count = yield prisma_1.default.haircut.count({
                where: {
                    user_id: user_id
                }
            });
            const user = yield prisma_1.default.user.findFirst({
                where: {
                    id: user_id
                },
                include: {
                    subscriptions: true
                }
            });
            //Validação de usuário
            if (count >= 3 && ((_a = user === null || user === void 0 ? void 0 : user.subscriptions) === null || _a === void 0 ? void 0 : _a.status) !== 'active') {
                throw new Error("Apenas possível para usuário premium");
            }
            const haircut = yield prisma_1.default.haircut.create({
                data: {
                    name: name,
                    price: price,
                    user_id: user_id
                }
            });
            return haircut;
        });
    }
}
exports.CreateHaircutService = CreateHaircutService;
