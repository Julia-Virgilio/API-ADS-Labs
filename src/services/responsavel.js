const Responsavel = require("../models/responsavel")
const Sequelize = require("sequelize")

async function list(queryParams) {   
    if (queryParams && queryParams.listarsempendencias === 'true') {
        const responsaveisSemTarefasPendentes = await Responsavel.findAll({
            where: Sequelize.literal(
                `(SELECT COUNT(*) FROM tarefas WHERE tarefas.idResp = responsaveis.id AND tarefas.concluida = false) = 0`
            )
        });
        return responsaveisSemTarefasPendentes;
    } else {
        const responsaveis = await Responsavel.findAll({ where: queryParams });
        return responsaveis;
    }
}

async function create({ nome, data_nascimento }) {
    const novoResp = await Responsavel.create({
      nome,
      data_nascimento
    });

    return novoResp;
}

async function update(id, dados){
    const responsavelEncontrado = await Responsavel.findByPk(id);
    
    if (!responsavelEncontrado) {
        return null; 
    }

    await responsavelEncontrado.update(dados);
    await responsavelEncontrado.save();

    return responsavelEncontrado;
}


async function remove(id){
    const respEncontrado = await Responsavel.findByPk(id);

    if(respEncontrado)
        await respEncontrado.destroy()

    return respEncontrado
}

module.exports = { list, create, update, remove }