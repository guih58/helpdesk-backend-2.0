import { Request,Response } from "express";
import { ListAllDepartamentService } from "../../services/department/ListAllDepartamentService";



class ListAllDepartamentController{
    async handle(req:Request, res:Response){

        const listAllDepartamentService = new ListAllDepartamentService();

        const department = await listAllDepartamentService.execute();


        return res.json(department)
    }
}



export{ListAllDepartamentController}