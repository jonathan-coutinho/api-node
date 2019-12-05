const express = require("express")

const routes = express.Router()

const UserController = require("./controllers/UserController")
//CRUD de users
routes.post('/user',UserController.create)
routes.put('/user/:userId', UserController.update)
routes.get('/user', UserController.list)
routes.get('/user/:userId', UserController.show)
routes.delete('/user/:userId', UserController.delete)
module.exports = routes

