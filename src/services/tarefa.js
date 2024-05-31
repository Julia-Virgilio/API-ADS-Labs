const Tarefa = require("../models/tarefa")
const Responsavel = require("../models/responsavel")
const { Op } = require('sequelize');

async function list(queryParams){
    if (queryParams && queryParams.tarefaspendentes){
        const idResp = queryParams.tarefaspendentes
        const tarefasPendentes = await Tarefa.findAll({
            where: {
                idResp: idResp,
                concluida: false,
                data_limite: {
                    [Op.gte]: new Date()
                }
    }})

    return tarefasPendentes;

} else {  
    return await Tarefa.findAll({ where: queryParams })
}

}

async function create({ titulo, descricao, data_limite, concluida }) {
    const novaTarefa = await Tarefa.create({
        titulo,
        descricao,
        data_limite,
        concluida
    });
    
    return novaTarefa;
}

async function update(id, dados){
    const tarefaEncontrada = await Tarefa.findByPk(id);
    
    if (!tarefaEncontrada) {
        return null; 
    }

    if (dados.idResp) {
        const responsavelEncontrado = await Responsavel.findByPk(dados.idResp);

        if (!responsavelEncontrado) {
            return null;
        }
    }

    await tarefaEncontrada.update(dados);
    await tarefaEncontrada.save();

    return tarefaEncontrada;
}

 
async function remove(id){
    const tarefaEncontrada = await Tarefa.findByPk(id); 
 
    if(tarefaEncontrada) 
        await tarefaEncontrada.destroy() 

    return tarefaEncontrada
}

module.exports = { list, create, update, remove }