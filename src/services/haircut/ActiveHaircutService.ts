import prisma from "../../prisma";

interface userRequest{
  user_id: string
}
class ActiveHaircutService{
  async execute ({user_id}: userRequest){
   const haircut = await prisma.haircut.count({
    where:{
      user_id: user_id,
    }
   })
   return haircut
  }
}

export {ActiveHaircutService}