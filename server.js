const express = require('express')
const router = express.Router()


let app = express()

app.use(express.urlencoded()).use(express.json())
app.use(router)

router.get('/', (req, res) => {
   console.log(req.headers)
   res.header({
      'custom-headers': 'Nuestro valor personalizado'
   })
   res.send('Lista de mesajes')
})

router.post ('/', (req, res) => {
   console.log(req.body)
   console.log(req.query)
   res.send('Mensaje añadido')
})

app.listen(3000)
console.log('La aplicación está escuchado en: http://localhost:3000')