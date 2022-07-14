const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000

routes(app)

app.listen(port, ()=> {
    console.log(`Servidor está rodando na porta ${port}`)
})

module.exports = app

const PessoasServices = require('./PessoasServices')
const TurmasServices = require('./TurmasServices')
const NiveisServices = require('./NiveisServices')
const MatriculasServices = require('./MatriculasServices')

module.exports = {
  PessoasServices: PessoasServices,
  TurmasServices: TurmasServices,
  NiveisServices: NiveisServices,
  MatriculasServices: MatriculasServices
}