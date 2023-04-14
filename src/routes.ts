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