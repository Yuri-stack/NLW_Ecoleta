import express from 'express'   //importando o express
import cors from 'cors'         //importando o express
import routes from './routes'
import path from 'path'
import { errors } from 'celebrate'

const app = express()           //criando a aplicação

app.use(cors())
app.use(express.json())         //colocando uma funcionalidade do express para entender JSON 
app.use(routes)

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.use(errors())

app.listen(3333)