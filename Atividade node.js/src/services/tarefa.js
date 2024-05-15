const Tarefa = require("../models/tarefa")

async function list(queryParams){
    return await Tarefa.findAll({ where: queryParams })
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