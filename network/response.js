exports.success = (req, res, message, status = 200) => {
   res.status(status).send({
      error: '',
      body: message
   })
}

exports.error = (req, res, message, status = 500) => {
   res.status(status).send({
      error: message || 'Error interno del servidor',
      body: ''
   })
}