const express = require('express')
const response = require('../../network/response')
const controller = require('./controller')

const router = express.Router()

router.get('/', async (req, res) => {
   try {
      const messages = await controller.getMessages()
      response.success(req, res, messages)
   } catch (e) {
      response.error(req, res, e, 401, 'No se pudo consultar')
   }
})

router.post('/', async (req, res) => {
   const { user, message } = req.body
   try {
      const resolve = await controller.addMessage(user, message)
      console.log(resolve)
      response.success(req, res, resolve, 201)
   } catch (e) {
      console.error(e)
      response.error(req, res, e, 400, 'Datos incorrectos, no hay usuario o contraseña')
   }
})

router.patch('/:id', async (req, res) => {
   try {
      const message = await controller.updateMessage(req.params.id, req.body.message)
      response.success(req, res, message)
   } catch (e) {
      response.error(req, res, 'Error interno', 500, e)
   }
})

module.exports = router