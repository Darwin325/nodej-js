const express = require('express')
const response = require('./network/response')

const router = express.Router()


let app = express()

app.use(express.urlencoded()).use(express.json())
app.use(router)

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


app.use('/app', express.static('public'))

app.listen(3000)
console.log('La aplicación está escuchado en: http://localhost:3000')