import { Request, Response } from "express";
import { UptadeUserService } from "../../services/user/UptadeUserService";

class UptadeUserController{
  async handle (req:Request, res:Response) {
    const {name, endereco} = req.body;
    const user_id = req.user_id // puxa o user_id do token pois o usuario ta logado
    const uptadeUserService = new UptadeUserService();
    const uptade = await uptadeUserService.execute({
      user_id,
      name,
      endereco
    })
    return res.json(uptade)
    
  }
}

export {UptadeUserController}