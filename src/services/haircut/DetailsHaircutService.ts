import prisma from "../../prisma";

interface userRequest{
  haircut_id: string
}
class DetailsHaircutService{
  async execute ({haircut_id}: userRequest){
   const haircut = await prisma.haircut.findFirst({
    where:{
      id: haircut_id
    }
   })
   return haircut
  }
}

export {DetailsHaircutService}