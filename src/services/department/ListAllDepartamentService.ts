import prismaClient from "../../prisma";




class ListAllDepartamentService{
    async execute(){

        const department = await prismaClient.department.findMany({
            select:{
                id: true,
                name: true
            }
        })

        return department
    }
}


export {ListAllDepartamentService}