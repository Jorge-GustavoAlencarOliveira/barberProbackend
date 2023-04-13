import { Request, Response } from "express";
import { CreatAdentService } from "../../services/atendiment/CreatAdentService";

class CreateAdentController{
  async handle(req: Request, res: Response){
    const user_id = req.user_id
    const {customer, haircut_id} = req.body;
    const creatAdentService = new CreatAdentService();
    const adent = await creatAdentService.execute({
      customer,
      haircut_id,
      user_id
    })
    return res.json(adent)
  }
}

export {CreateAdentController}