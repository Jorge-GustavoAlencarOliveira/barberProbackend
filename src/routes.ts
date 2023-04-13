// import multer from 'multer';
// import uploadConfig from './config/multer';

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
import {Router} from "express"
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { UptadeUserController } from "./controllers/user/UptadeUserController";
import { CreateHaircutController } from "./controllers/haircut/CreateHaircutController";
import { ListHaircutController } from "./controllers/haircut/ListHaircutController";
import { UptadeHaircutController } from "./controllers/haircut/UptadeHaircutController";
import { StatusUserController } from "./controllers/haircut/StatusUserController";
import { ActiveHaircutController } from "./controllers/haircut/ActiveHaircutController";
import { DetailsHaircutController } from "./controllers/haircut/DetailsHaircutController";
import { CreateAdentController } from "./controllers/atendiment/CreateAdentController";
import { ListAdentController } from "./controllers/atendiment/ListAdentController";
import { FinishAdentController } from "./controllers/atendiment/FinishAdentController";

const router = Router();

// --- Rotas User ----
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)
router.put('/uptade', isAuthenticated, new UptadeUserController().handle)

// ---Rotas haircut ---
router.post('/haircut', isAuthenticated, new CreateHaircutController().handle)
router.get('/haircut', isAuthenticated, new ListHaircutController().handle)
router.put('/haircut/uptade', isAuthenticated, new UptadeHaircutController().handle)
router.get('/haircut/check', isAuthenticated, new StatusUserController().handle)
router.get('/haircut/active', isAuthenticated, new ActiveHaircutController().handle)
router.get('/haircut/detail', isAuthenticated, new DetailsHaircutController().handle)

// ---Rotas Atendimento---
router.post('/service', isAuthenticated, new CreateAdentController().handle)
router.get('/service/list', isAuthenticated, new ListAdentController().handle)
router.delete('/service/finish', isAuthenticated, new FinishAdentController().handle)

export {router}