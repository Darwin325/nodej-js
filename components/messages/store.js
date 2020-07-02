const db = require('mongoose')
const Model = require('./model')

//mongodb+srv://node-js:<password>@cluster0.2mzwc.mongodb.net/<dbname>?retryWrites=true&w=majority
db.Promise = global.Promise
db.connect('mongodb+srv://node-js:AUSeWNg5whspEnLO@cluster0.2mzwc.mongodb.net/Cluster0?retryWrites=true&w=majority',
   { useNewUrlParser: true, useUnifiedTopology: true }
   )

console.log('[DB]: Conectada con éxito')

const addMessage = message => {
   const myMessage = new Model(message)
   myMessage.save()
}

const getMessage = async () => {
   const messages = await Model.find()
   return messages
}

const updateText = async (id, message) => {
   const foundMessage = await Model.findOne({
      _id: id
   })

   foundMessage.message = message
   const newMessage = await foundMessage.save()
   return newMessage
}

module.exports = {
   add: addMessage,
   list: getMessage,
   updateText
}