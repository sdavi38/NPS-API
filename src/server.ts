import 'reflect-metadata'
import './database'
import express from 'express'
import router from './routes/router'

const app = express()
app.use(router);
app.listen(3333,()=> console.log(
  'Server is running!'
))

