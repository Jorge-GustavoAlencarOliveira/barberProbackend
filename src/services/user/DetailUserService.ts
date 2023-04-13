import prisma from "../../prisma";

class DetailUserService {
  async execute(user_id: string){
    const user = await prisma.user.findFirst({
      where:{
        id: user_id
      },
      select:{
        id: true,
        name: true,
        email: true,
        endereco: true,
        subscriptions:{
          select:{
            id: true,
            priceID: true,
            status: true
          }
        }
      }
    })
    
    return user
  }
  
};

export {DetailUserService};