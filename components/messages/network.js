const express = require('express')
const response = require('../../network/response')

const router = express.Router()

router.get('/', (req, res) => {
   response.success(req, res, 'Lista de mensajes')
})

router.post('/', (req, res) => {
   if (req.query.error == 'ok') {
      response.error(req, res, 'Page not found', 404, 'Esto es un error simulado')
   } else {
      response.success(req, res, 'Creado correctamente', 201)
   }
})

module.exports = router