const service = require("../services/tarefa")

function list(req, res){
    service.list(req.query).then((tarefas) => {
        return res.send({ tarefas: tarefas })
    }) 
}

async function create(req, res) {
        const { titulo, descricao, data_limite, concluida } = req.body;
        const novaTarefa = await service.create({
            titulo,
            descricao,
            data_limite,
            concluida
        });
        res.send({
            message: "Tarefa criada com sucesso",
            tarefa: novaTarefa
        });
}


async function update(req, res) {
        const id = req.params.id; 
        const dados = req.body; 

        const tarefaEditada = await service.update(id, dados);

        if(!tarefaEditada)
            return res.status(404).send({ message: "Tarefa ou responsável não encontrados" });
    
        res.send({
            message: "Tarefa atualizada com sucesso",
            tarefa: tarefaEditada
        })
}

async function remove(req, res) {
    const tarefaAtualizada = await service.remove(req.params.id, req.body);

    if(!tarefaAtualizada)
        return res.status(404).send({ message: "Tarefa não encontrada" });
    
    return res.send({
        message: "Tarefa removida com sucesso",
        tarefa: tarefaAtualizada
    });    

}

module.exports = { list, create, update, remove }