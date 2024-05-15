const Tarefa = require("../models/tarefa")
const Responsavel = require("../models/responsavel")

function verificarNome(req, res, next){
    const nome = req.body.nome

    if(!nome) 
        return res.status(400).send({message: "Por favor insira o nome do responsável"})

    if (nome.length < 3) 
        return res.status(400).send({ message: "O nome deve ter no mínimo 3 caracteres" })

    const regex = /^[a-zA-Z]+$/;
    if (!regex.test(nome)) 
        return res.status(400).send({ message: "O nome deve conter apenas letras" });
    
    return next()
}

function verificarData(req, res, next){
    const data = new Date(req.body.data_nascimento)
    const ano = data.getFullYear();
    
    if(!data) 
        return res.status(400).send({message: "Por favor insira a data de nascimento do responsável"})

    if(ano > 2014)
        return res.status(400).send({message: "O responsável não pode ter data de nascimento acima de 2014"})

    return next()
}

function temdata_limite(req, res, next){
    if(!req.body.data_limite) 
        return res.status(400).send({message: "Por favor insira a data limite da tarefa"})
    return next()
}

function temtitulo(req, res, next){
    if(!req.body.titulo) 
        return res.status(400).send({message: "Por favor insira o título da tarefa"})
    return next()
}

function temconcluida(req, res, next){
    if(!req.body.concluida) 
        return res.status(400).send({message: "Por favor insira se a tarefa foi concluída ou não (true ou false)"})
    return next()
}

function tarefaExpirada(req, res, next){
    const tarefaId = req.params.id

    Tarefa.findByPk(tarefaId).then(tarefa => {
        const dataLimite = new Date(tarefa.data_limite);
        const dataAtual = new Date();

        if (dataAtual > dataLimite) {
            return res.status(400).send({ message: "Não é permitido marcar a tarefa como concluída após a data limite" });
        }
    })

    next()
}

module.exports = { verificarNome, verificarData, temconcluida, temdata_limite, temtitulo, tarefaExpirada }