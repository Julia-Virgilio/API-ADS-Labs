require("dotenv").config({ path: ".env"})
require("./database/database")

const express = require("express")
const respRouter = require("./routes/responsavel")
const tarefaRouter = require("./routes/tarefa")
const app = express()

app.use(express.json())
app.use("/responsavel", respRouter)
app.use("/tarefa", tarefaRouter)


app.listen(process.env.PORT, console.log(`Servidor escutando na porta ${process.env.PORT}`))

module.exports = app