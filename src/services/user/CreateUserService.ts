import prismaClient from "../../prisma";
import {hash} from 'bcryptjs'


type UserRequest={
    name: string;
    email: string;
    password: string;
    role?: any
   
}






class CreateUserService{
    async execute({name,email,password,role}:UserRequest){

    if(email==='' || password=== '' || name===''){
        throw Error('Preencha todos os campos!!')
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
        where:{
            email: email
        }
    })

    if(userAlreadyExists){
        throw Error('E-mail já cadastrado!!')
    }

    const passwordHash = await hash(password,8)


    const user = await prismaClient.user.create({
        data:{
            name,
            email,
            role,
            password:passwordHash,
            
        },
        select:{
            id:true,
            email:true,
            
        }
    })

    return user

    }
}

export {CreateUserService}