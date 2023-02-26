import {Router} from 'express';
import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { RemoverCategoryController } from './controllers/category/RemoveCategoryController';
import { CreateDepartmentController } from './controllers/department/CreateDepartmentController';
import { ListAllDepartamentController } from './controllers/department/ListAllDepartamentController';
import { CreateTicketController } from './controllers/ticket/CreateTicketController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { CreateUserController } from './controllers/user/CreateUserController';
import { ListUserController } from './controllers/user/ListUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';


const router = Router();

//### Categoria
//Criando uma nova categoria
router.post('/category', isAuthenticated ,new CreateCategoryController().handle)
//Listando todas as categorias
router.get('/category', isAuthenticated, new ListCategoryController().handle)
//Excluindo categoria
router.delete('/category/remove', isAuthenticated, new RemoverCategoryController().handle)


//### Departamento
//Criando Departamento
router.post('/department', isAuthenticated, new CreateDepartmentController().handle)
//Listando todos os Departamentos
router.get('/departments', isAuthenticated, new ListAllDepartamentController().handle)


//## Usuarios
//Criando um novo usuário
router.post('/users' , isAuthenticated,new CreateUserController().handle)
//Listando Usuário
router.get('/users', isAuthenticated, new ListUserController().handle)
//Autenticação
router.post('/session', new AuthUserController().handle)


//## Ticket
//Criando Chamado
router.post('/ticket', isAuthenticated, new CreateTicketController().handle)


export default router