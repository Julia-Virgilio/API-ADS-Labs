const express = require("express")
const Trouter = express.Router()
const controller = require("../controllers/tarefa")
const middlewares = require("../middlewares/tarefa")

Trouter.get("/", controller.list)
Trouter.post("/", middlewares.verificacao, controller.create)
Trouter.put("/:id", middlewares.mudarstatus, controller.update)
Trouter.delete("/:id", controller.remove)

module.exports = Trouter
