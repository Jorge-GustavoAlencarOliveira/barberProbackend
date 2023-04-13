import prisma from "../../prisma";

interface userRequest{
  user_id: string
}

class StatusUserService {
  async execute({user_id}:userRequest){
    const user = await prisma.user.findFirst({
      where:{
        id: user_id
      },
      select:{
        subscriptions: {
          select:{
            id: true,
            status: true
          }
        }
      }
    })
    return user
  }
};

export {StatusUserService}