const store = require('./store')

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
      store.add(fullMessage)
      resolve(fullMessage)
   }))
}

const getMessages = () => {
   return new Promise(((resolve, reject) => {
      resolve(store.list())
   }))
}

const updateMessage = (id, message) => {
   return new Promise((async (resolve, reject) => {
      if (!id || !message) {
         return reject('Invalid data')
      }
      const res = await store.updateText(id, message)
      resolve(res)
   }))
}

module.exports = {
   addMessage,
   getMessages,
   updateMessage
}