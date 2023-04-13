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
exports.CreateAdentController = void 0;
const CreatAdentService_1 = require("../../services/atendiment/CreatAdentService");
class CreateAdentController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_id = req.user_id;
            const { customer, haircut_id } = req.body;
            const creatAdentService = new CreatAdentService_1.CreatAdentService();
            const adent = yield creatAdentService.execute({
                customer,
                haircut_id,
                user_id
            });
            return res.json(adent);
        });
    }
}
exports.CreateAdentController = CreateAdentController;
