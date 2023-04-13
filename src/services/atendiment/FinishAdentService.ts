import prisma from "../../prisma";

interface adentRequest{
  adent_id: string;
}

class FinishAdentService{
  async execute({adent_id}:adentRequest){
    const adent = await prisma.service.delete({
      where:{
        id: adent_id
      }
    })
    return adent;
  }
}

export {FinishAdentService}