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
exports.FinishAdentController = void 0;
const FinishAdentService_1 = require("../../services/atendiment/FinishAdentService");
class FinishAdentController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const adent_id = req.query.adent_id;
            const finishAdentService = new FinishAdentService_1.FinishAdentService();
            const adent = yield finishAdentService.execute({
                adent_id
            });
            return res.json(adent);
        });
    }
}
exports.FinishAdentController = FinishAdentController;
