const database = require("../database/database")
const Sequelize = require("sequelize")
const Resp = require("./responsavel")

const Tarefa = database.define("tarefas", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: { 
        type: Sequelize.STRING,
        allowNull: true
    },
    data_limite: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    concluida: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, {
    timestamp: true
})


module.exports = Tarefa