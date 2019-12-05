const express = require('express')
const Bodyparser = require('body-parser')

const mongoose = require('mongoose')

const app = express()
let port = 3000


app.listen(port, () => {
    console.log (`Servidor rodando na porta ${port}`)
})

mongoose.connect ("mongodb+srv://api-node:!123456@cluster0-uwzef.mongodb.net/test?retryWrites=true&w=majority",{ useUnifiedTopology: true,useNewUrlParser: true })
app.use(Bodyparser.json())

const user = {

}



app.use('/' , require("./src/routes"))

//MONGODB
