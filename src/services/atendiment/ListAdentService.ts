import prisma from "../../prisma";

interface adentRequest{
  user_id: string
}

class ListAdentService{
  async execute({user_id}:adentRequest){
    const list = await prisma.service.findMany({
      where:{
        user_id: user_id
      },
      select:{
        id: true,
        customer: true,
        haircut: true
      }
    })
    return list;
  }
}

export {ListAdentService}