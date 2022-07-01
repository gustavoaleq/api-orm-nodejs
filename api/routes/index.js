const pessoas = require('./pessoasRoute')
const bodyParser = require('body-parser')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.use(niveis)
    app.use(turmas)
}