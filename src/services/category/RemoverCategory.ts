import prismaClient from "../../prisma";

interface CategoryRequest{
    category_id: string
}


class RemoverCategoryService{
    async execute({category_id}:CategoryRequest){

        const category = await prismaClient.category.delete({
            where:{
                id: category_id
            }
        })

        return category

    }
}



export {RemoverCategoryService}