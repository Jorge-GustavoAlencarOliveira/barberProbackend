import prisma from "../../prisma";

interface adentRequest{
  customer: string;
  haircut_id: string;
  user_id: string
}

class CreatAdentService{
  async execute({customer, haircut_id, user_id}:adentRequest){
    const adent = await prisma.service.create({
      data:{
        customer: customer,
        haircut_id: haircut_id,
        user_id: user_id
      }
    })
    return adent;
  }
}

export {CreatAdentService}