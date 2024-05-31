
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

module.exports = { verificarNome, verificarData }