import { Request, Response } from "express";
import { ActiveHaircutService } from "../../services/haircut/ActiveHaircutService";

class ActiveHaircutController{
  async handle(req: Request, res: Response){
    const user_id = req.user_id;
    const activeHaircutService = new ActiveHaircutService();
    const haircut = await activeHaircutService.execute({
      user_id
    })
    return res.json(haircut)
  }
}

export {ActiveHaircutController}