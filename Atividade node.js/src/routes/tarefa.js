const express = require("express")
const Trouter = express.Router()
const controller = require("../controllers/tarefa")
const middlewares = require("../middlewares/middlewares")

Trouter.get("/", controller.list)
Trouter.post("/", middlewares.temtitulo, middlewares.temdata_limite, middlewares.temconcluida, controller.create)
Trouter.put("/:id", middlewares.tarefaExpirada, controller.update)
Trouter.delete("/:id", controller.remove)

module.exports = Trouter
