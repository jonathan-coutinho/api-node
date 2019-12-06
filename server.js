const express = require('express')
const Bodyparser = require('body-parser')
const cors = require('cors')

const mongoose = require('mongoose')

const app = express()
let port = process.env.PORT || 4000


app.listen(port, () => {
    console.log (`Servidor rodando na porta ${port}`)
})

mongoose.connect ("mongodb+srv://api-node:!123456@cluster0-uwzef.mongodb.net/test?retryWrites=true&w=majority",{
     useUnifiedTopology: true,
     useNewUrlParser: true,
     useFindAndModify:false
})


app.use(Bodyparser.json())
app.use(cors())

app.use('/' , require("./src/routes.js"))

//MONGODB
