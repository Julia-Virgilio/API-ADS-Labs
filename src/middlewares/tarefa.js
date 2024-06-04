const Tarefa = require("../models/tarefa")

function verificacao(req, res, next){
    if(!req.body.data_limite) 
        return res.status(400).send({message: "Por favor insira a data limite da tarefa"})

    if(!req.body.titulo) 
        return res.status(400).send({message: "Por favor insira o título da tarefa"})

    if(typeof req.body.concluida !== 'boolean') 
        return res.status(400).send({message: "Por favor insira se a tarefa foi concluída ou não (true ou false)"})
        
        next();
}

function mudarstatus(req, res, next){
    if(req.body.concluida){
        const tarefaId = req.params.id
    
        Tarefa.findByPk(tarefaId).then(tarefa => {
            const dataLimite = new Date(tarefa.data_limite);
            const dataAtual = new Date();
    
            if (dataAtual > dataLimite) {
                return res.status(400).send({ message: "Não é permitido marcar a tarefa como concluída após a data limite" });
            }
        })
    }

    next();
}

module.exports = { verificacao, mudarstatus }