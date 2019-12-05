const express = require("express")

const routes = express.Router()

const UserController = require("./controllers/UserController")

routes.post('/user',UserController.create)
routes.put('/user/:userId', UserController.update)


module.exports = routes

