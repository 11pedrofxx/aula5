import { Router } from "express";
const endpoints = Router();


endpoints.get('/boasVindas/:nome', (req, resp) => {
    let nome = req.params.nome;

    resp.send({
        mensagem: 'Olá ' + nome
    })
})


endpoints.get('/olaAluno', (req, resp) => {
    let nome = req.query.nome;
    let turma = req.query.turma;
    let numero = req.query.numero;

    resp.send({
        mensagem: 'Olá ' + nome + ', turma ' + turma + ', número ' + numero
    })
})


endpoints.post('/meusPais', (req, resp) => {
    let corpo = req.body;

    let mae = corpo.mae;
    let pai = corpo.pai;

    resp.send({
        mae: mae,
        pai: pai
    })
})


endpoints.post('/irmaos', (req, resp) => {
    let corpo = req.body;
    let quantidade = req.body.quantidade;
    let irmaos = req.body.irmaos;

    resp.send({
        quantidade: quantidade,
        irmaos: irmaos
    })
})



export default endpoints;

