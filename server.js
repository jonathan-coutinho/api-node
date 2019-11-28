const express = require('express')

const app = express()
let port = 3000
app.listen(port, () => {
    console.log (`Servidor rodando na porta ${port}`)
})

app.get('/', (reg,res) => {
    res.send ("Minha primeira rota")
})
app.get('/teste', (reg,res) => {
    res.send ("Meu primeiro teste")
})
app.get('/teste/2', (reg,res) => {
    res.send ("Meu segundo teste")
})
