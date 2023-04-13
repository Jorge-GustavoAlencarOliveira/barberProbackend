import prisma from "../../prisma";

interface haircutRequest{
  name: string,
  price: number,
  haircut_id: string,
  user_id: string,
  status: boolean | string
}

class UptadeHaircutService{
  async execute({name, price, haircut_id, user_id, status = true}:haircutRequest){
    const user = await prisma.user.findFirst({
      where:{
        id: user_id
      },
      include:{
        subscriptions: true
      }
    })
    if(user?.subscriptions?.status !== "active"){
      throw new Error("Não autorizado")
    }
    const haircut = await prisma.haircut.update({
      where:{
        id: haircut_id
      },
      data:{
        name: name,
        price: price,
        status: status === true ? true : false
      }
    })
    return haircut
  }
}

export {UptadeHaircutService}