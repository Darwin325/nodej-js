

const addMessage = (user, message) => {
   return new Promise(((resolve, reject) => {
      if (!user || !message) {
         console.error('[messageController]: no hay usuario o contraseña')
         return reject('Los datos son incorrectos')
      }
      const fullMessage = {
         user, message,
         date: new Date()
      }
      resolve(fullMessage)
   }))
}

module.exports = {
   addMessage
}