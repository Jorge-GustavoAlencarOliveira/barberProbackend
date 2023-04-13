import { Request, Response } from "express";
import { UptadeHaircutService } from "../../services/haircut/UptadeHaircutService";

class UptadeHaircutController {
  async handle(req: Request, res: Response){
    const user_id = req.user_id;
    const {name, price, haircut_id, status} = req.body;
    const uptadeHaircutService = new UptadeHaircutService();
    const haircut = await uptadeHaircutService.execute({
      name,
      price,
      haircut_id,
      status,
      user_id
    })
    return res.json(haircut)
  }
}

export {UptadeHaircutController}