import prisma from "../../prisma";

interface haircutRequest{
  name: string,
  price: number,
  user_id: string
}
//Verificar quantos modelos de corte esse usuario ja tem
// Verificar se o usuario é premium

class CreateHaircutService {
  async execute({name, price, user_id}: haircutRequest){
    if (!name || !price){
      throw new Error('preencha os campos')
    }
//Verificar quantos modelos de corte esse usuario ja tem
    const count = await prisma.haircut.count({
      where:{
        user_id: user_id
      }
    })
    const user = await prisma.user.findFirst({
      where:{
        id: user_id
      },
      include:{
        subscriptions: true
      }
    })
//Validação de usuário
   if(count >= 3 && user?.subscriptions?.status !== 'active'){
    throw new Error("Apenas possível para usuário premium")
   }
    const haircut = await prisma.haircut.create({
      data:{
        name: name,
        price: price,
        user_id: user_id
      }
    })
    return haircut
  }
}

export {CreateHaircutService}