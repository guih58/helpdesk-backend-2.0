import prismaClient from "../../prisma";

interface TicketRequest{
    title: string,
    description: string,
    category_id: string,
    department_id: string,
    client_id: string

}

class CreateTicketService{
    async execute({title,department_id,description,category_id,client_id}:TicketRequest){

        const ticket = await prismaClient.ticket.create({
            data:{
                title,
                department_id,
                description,
                category_id,
                client_id
            },
            select:{
                id:true,
                title:true,
                description:true,
                department_id: true,
                category_id:true,
                client_id:true,
                create_at:true
            }
        })

        return ticket
    }
}



export {CreateTicketService}