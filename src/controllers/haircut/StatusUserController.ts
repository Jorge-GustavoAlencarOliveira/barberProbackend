import { Request, Response } from "express";
import { StatusUserService } from "../../services/haircut/StatusUserService";

class StatusUserController {
  async handle (req: Request, res: Response){
    const user_id = req.user_id;
    const statusUserService = new StatusUserService();
    const status = await statusUserService.execute({
      user_id
    })
    return res.json(status)
  }
}

export {StatusUserController}