"use strict";
// import multer from 'multer';
// import uploadConfig from './config/multer';
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
// const upload = multer(uploadConfig.upload('./tmp'));
// // ROTAS USER
// router.post('/users', new CreateUserController().handle);
// router.post('/session', new AuthUserController().handle);
// router.get('/me', isAuthenticated ,new DetailUserController().handle)
// // ROTAS CATEGORIAS
// router.post('/category', isAuthenticated, new CreateCategoryController().handle);
// router.get('/category', isAuthenticated, new ListCategoryController().handle)
// //ROTAS PRODUTOS
// router.post('/products', isAuthenticated, upload.single('file'), new CreateProductController().handle);
// router.get('/products', isAuthenticated, new ListByCategoryController().handle)
// //ROTAS ORDENS
// router.post('/orders', isAuthenticated, new CreateOrderController().handle)
// router.delete('/orders/delete', isAuthenticated, new DeleteOrderController().handle)
// router.post('/orders/items', isAuthenticated, new AddItemController().handle)
// router.delete('/orders/items/delete', isAuthenticated, new DeleteItemController().handle)
// router.put('/orders/update', isAuthenticated, new SendOrderController().handle)
// router.get('/orders/list', isAuthenticated, new ListOrderController().handle)
// router.get('/orders/detail', isAuthenticated, new DetailOrderController().handle)
// router.put('/orders/close', isAuthenticated, new CloseOrderController().handle)
// export {router};
const express_1 = require("express");
const CreateUserController_1 = require("./controllers/user/CreateUserController");
const AuthUserController_1 = require("./controllers/user/AuthUserController");
const DetailUserController_1 = require("./controllers/user/DetailUserController");
const isAuthenticated_1 = require("./middlewares/isAuthenticated");
const UptadeUserController_1 = require("./controllers/user/UptadeUserController");
const CreateHaircutController_1 = require("./controllers/haircut/CreateHaircutController");
const ListHaircutController_1 = require("./controllers/haircut/ListHaircutController");
const UptadeHaircutController_1 = require("./controllers/haircut/UptadeHaircutController");
const StatusUserController_1 = require("./controllers/haircut/StatusUserController");
const ActiveHaircutController_1 = require("./controllers/haircut/ActiveHaircutController");
const DetailsHaircutController_1 = require("./controllers/haircut/DetailsHaircutController");
const CreateAdentController_1 = require("./controllers/atendiment/CreateAdentController");
const ListAdentController_1 = require("./controllers/atendiment/ListAdentController");
const FinishAdentController_1 = require("./controllers/atendiment/FinishAdentController");
const router = (0, express_1.Router)();
exports.router = router;
// --- Rotas User ----
router.post('/users', new CreateUserController_1.CreateUserController().handle);
router.post('/session', new AuthUserController_1.AuthUserController().handle);
router.get('/me', isAuthenticated_1.isAuthenticated, new DetailUserController_1.DetailUserController().handle);
router.put('/uptade', isAuthenticated_1.isAuthenticated, new UptadeUserController_1.UptadeUserController().handle);
// ---Rotas haircut ---
router.post('/haircut', isAuthenticated_1.isAuthenticated, new CreateHaircutController_1.CreateHaircutController().handle);
router.get('/haircut', isAuthenticated_1.isAuthenticated, new ListHaircutController_1.ListHaircutController().handle);
router.put('/haircut/uptade', isAuthenticated_1.isAuthenticated, new UptadeHaircutController_1.UptadeHaircutController().handle);
router.get('/haircut/check', isAuthenticated_1.isAuthenticated, new StatusUserController_1.StatusUserController().handle);
router.get('/haircut/active', isAuthenticated_1.isAuthenticated, new ActiveHaircutController_1.ActiveHaircutController().handle);
router.get('/haircut/detail', isAuthenticated_1.isAuthenticated, new DetailsHaircutController_1.DetailsHaircutController().handle);
// ---Rotas Atendimento---
router.post('/service', isAuthenticated_1.isAuthenticated, new CreateAdentController_1.CreateAdentController().handle);
router.get('/service/list', isAuthenticated_1.isAuthenticated, new ListAdentController_1.ListAdentController().handle);
router.delete('/service/finish', isAuthenticated_1.isAuthenticated, new FinishAdentController_1.FinishAdentController().handle);
