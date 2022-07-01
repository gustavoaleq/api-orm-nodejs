const { Router } = require('express')
const { atualizarPessoa } = require('../controllers/PessoaController')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoaController.listaPessoas)
//router.get('/pessoas/:id', PessoaController.listaPessoaPorId)
router.post('/pessoas', PessoaController.criaPessoa)
router.put('/pessoas/:id', PessoaController.atualizarPessoa)
router.delete('/pessoas/:id', PessoaController.apagaPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)

module.exports = router