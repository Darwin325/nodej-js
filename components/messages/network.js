const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', (req, res) => {
   response.success(req, res, 'Lista de mensajes')
})

router.post('/', async (req, res) => {
   const { user, message } = req.body
   try {
      const resolve = await controller.addMessage(user, message)
      console.log('resolve', resolve)
      response.success(req, res, resolve, 201)
   } catch (e) {
      console.error(e)
      response.error(req, res, e, 400, 'Datos incorrectos, no hay usuario o contraseña')
   }
})

module.exports = router