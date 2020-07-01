const express = require('express')
const router = require('./network/routes')

let app = express()

app.use(express.urlencoded()).use(express.json())
router(app)


app.use('/app', express.static('public'))

app.listen(3000)
console.log('La aplicación está escuchado en: http://localhost:3000')