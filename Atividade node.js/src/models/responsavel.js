const database = require("../database/database")
const Sequelize = require("sequelize")
const Tarefa = require("./tarefa")

const Resp = database.define("responsaveis", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }
})

Resp.hasMany(Tarefa, { foreignKey: 'idResp' });
Tarefa.belongsTo(Resp, { foreignKey: 'idResp' })

module.exports = Resp