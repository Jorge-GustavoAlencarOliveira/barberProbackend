import prisma from "../../prisma";

interface ListRequest{
  user_id: string,
  status: boolean | string;
}

class ListHaircutService{
  async execute({user_id, status}:ListRequest){
    const list = await prisma.haircut.findMany({
      where:{
        user_id: user_id,
        status: status === "true" ? true : false
      }
    })
    return list
  }
}

export {ListHaircutService}