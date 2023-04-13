import prisma from "../../prisma";

interface userProps {
  user_id: string
  name: string,
  endereco: string,
}

class UptadeUserService {
  async execute({user_id, name, endereco}: userProps){
    try{
      const userAlreadyExists = await prisma.user.findFirst({
        where:{
          id: user_id
        }
      })
      if(!userAlreadyExists){
        throw new Error("Usuário não existe")
      }
      const userUptade = await prisma.user.update({
        where:{
          id: user_id
        },
        data:{
          name,
          endereco,
        },
        select:{
          name: true,
          email: true,
          endereco: true
        }
      })

      return userUptade
    
    }
    catch(err){
      throw new Error("Erro na atualização do usuário")
    }

  }
}

export {UptadeUserService}