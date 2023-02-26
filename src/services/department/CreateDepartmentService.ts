import prismaClient from "../../prisma";

interface DepartmentRequest{
    name: string
}


class CreateDepartmentService{
    async execute({name}: DepartmentRequest){

        const department = await prismaClient.department.create({
            data:{
                name:name
            },
            select:{
                id:true,
                name:true
            }
        })

        return department
    }
}


export {CreateDepartmentService}