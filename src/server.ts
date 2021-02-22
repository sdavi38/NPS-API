import express from 'express'

const app = express()
/**
 * GET = =Buscar
 * POST =  "license": "MIT",

 * PUT = Alterar
 * DELETE = Deletar
 * PATCH = Alteração Especifica
 */
//https://localhost:3333/users
app.get('/', (request, response)=>{
  //return response.send('ola')
  return response.json({mensagem:'Olá Devs'})
})
// 1 param => Rota (Recurso API)
// 2 param => request, response 
app.post('/', (request, response)=>{
  return response.json({mensagem:'Dados Salvos com sucesso!'})
})
app.listen(3333,()=> console.log(
  'Server is running!'
))

