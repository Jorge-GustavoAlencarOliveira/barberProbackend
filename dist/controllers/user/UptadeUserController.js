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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UptadeUserController = void 0;
const UptadeUserService_1 = require("../../services/user/UptadeUserService");
class UptadeUserController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, endereco } = req.body;
            const user_id = req.user_id; // puxa o user_id do token pois o usuario ta logado
            const uptadeUserService = new UptadeUserService_1.UptadeUserService();
            const uptade = yield uptadeUserService.execute({
                user_id,
                name,
                endereco
            });
            return res.json(uptade);
        });
    }
}
exports.UptadeUserController = UptadeUserController;
