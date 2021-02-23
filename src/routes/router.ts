import {Router} from 'express'
import {UserController} from '../controllers/UserController'

/**
 * GET = =Buscar
 * POST =  "license": "MIT",

 * PUT = Alterar
 * DELETE = Deletar
 * PATCH = Alteração Especifica
 */
//https://localhost:3333/users

const router = Router();
const userController = new UserController
router.post('/users', userController.create)
//return response.send('ola')
  
// 1 param => Rota (Recurso API)
// 2 param => request, response 
router.post('/', (request, response)=>{
  return response.json({mensagem:'Dados Salvos com sucesso!'})
})
export default router;