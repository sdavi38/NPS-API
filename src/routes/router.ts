import {Router} from 'express'

/**
 * GET = =Buscar
 * POST =  "license": "MIT",

 * PUT = Alterar
 * DELETE = Deletar
 * PATCH = Alteração Especifica
 */
//https://localhost:3333/users

const router = Router();
router.get('/', (request, response)=>{
  //return response.send('ola')
  return response.json({mensagem:'Olá Devs'})
})
// 1 param => Rota (Recurso API)
// 2 param => request, response 
router.post('/', (request, response)=>{
  return response.json({mensagem:'Dados Salvos com sucesso!'})
})
export default router;