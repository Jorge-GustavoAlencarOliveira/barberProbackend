import { Request, Response } from "express";
import { FinishAdentService } from "../../services/atendiment/FinishAdentService";

class FinishAdentController{
  async handle(req: Request, res: Response){
    const adent_id = req.query.adent_id as string
    const finishAdentService = new FinishAdentService();
    const adent = await finishAdentService.execute({
      adent_id
    })
    return res.json(adent)
  }
}

export {FinishAdentController}