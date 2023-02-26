import prismaClient from "../../prisma";



class ListUserService{
    async execute(){

        const user = await prismaClient.user.findMany({
            select:{
                id:true,
                name: true,
                email:true,
                role: true
            }
        })


        return user
    }
}


export {ListUserService}