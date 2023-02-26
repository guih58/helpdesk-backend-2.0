import { Request,Response } from "express";
import { CreateDepartmentService } from "../../services/department/CreateDepartmentService";


class CreateDepartmentController{
    async handle(req:Request,res:Response){

        const {name} = req.body

        const createDepartmentService = new CreateDepartmentService();
        const department = await createDepartmentService.execute({name})


        return res.json(department)
    }
}


export {CreateDepartmentController}