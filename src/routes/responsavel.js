const express = require("express")
const Rrouter = express.Router()
const controller = require("../controllers/responsavel")
const middlewares = require("../middlewares/middlewares")

Rrouter.get("/", controller.list)
Rrouter.post("/", middlewares.verificarNome, middlewares.verificarData, controller.create)
Rrouter.put("/:id", middlewares.verificarNome, controller.update)
Rrouter.delete("/:id", controller.remove)

module.exports = Rrouter