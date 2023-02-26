import { Request,Response } from "express";
import { CreateTicketService } from "../../services/ticket/CreateTicketService";


class CreateTicketController{
    async handle(req:Request,res:Response){

        const {title,description,department_id,category_id,client_id} = req.body

        const createTicketService = new CreateTicketService();

        const ticket = await createTicketService.execute({
            title,
            description,
            department_id,
            category_id,
            client_id

        })

        res.json(ticket)
    }
}


export {CreateTicketController}