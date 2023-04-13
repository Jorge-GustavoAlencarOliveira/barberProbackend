import { Request, Response } from "express";
import { ListAdentService } from "../../services/atendiment/ListAdentService";

class ListAdentController{
  async handle(req: Request, res: Response){
    const user_id = req.user_id
    const listAdentService = new ListAdentService();
    const adent = await listAdentService.execute({
      user_id
    })
    return res.json(adent)
  }
}

export {ListAdentController}