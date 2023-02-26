import { Request, Response } from "express";
import { RemoverCategoryService } from "../../services/category/RemoverCategory";


class RemoverCategoryController{
    async handle(req:Request, res:Response){

        const category_id = req.query.category_id as string;

        const removerCategoryService = new RemoverCategoryService();

        const category = await removerCategoryService.execute({category_id})

        return res.json(category)
    }
}


export {RemoverCategoryController}