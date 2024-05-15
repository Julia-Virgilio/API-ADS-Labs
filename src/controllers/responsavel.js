const service = require("../services/responsavel")

function list(req, res){
    service.list(req.query).then((responsaveis) => {
        return res.send({ responsáveis: responsaveis })
    }) 
}
    
async function create(req, res) {
    const { nome, data_nascimento } = req.body;
    const novoResp = await service.create({
        nome, 
        data_nascimento
    });
    res.send({
        message: "Responsável criado com sucesso",
        Responsável: novoResp
    });
}

async function update(req, res) {
        const respAtualizado = await service.update(req.params.id, req.body);

        if(!respAtualizado)
            return res.status(404).send({ message: "Responsável não encontrado" });
        
        return res.send({
            message: "Responsável atualizado com sucesso",
            responsável: respAtualizado
        });    
    
}

async function remove(req, res) {
    const respAtualizado = await service.remove(req.params.id, req.body);

    if(!respAtualizado)
        return res.status(404).send({ message: "Responsável não encontrado" });
    
    return res.send({
        message: "Responsável removido com sucesso",
        responsável: respAtualizado
    });    

}

module.exports = { list, create, update, remove }