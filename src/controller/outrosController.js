import { Router } from "express";
const endpoints = Router();


endpoints.post('/compraComDesconto/:desconto', (req, resp) => {
    let corpo = req.body;
    let desconto = Number(req.params.desconto);
    let valor = corpo.valor;

    let valorFinal = valor - desconto
     resp.send({
        ValorFinal: valorFinal
    })

    // TODO: calcular valor da compra com desconto
    // Entrada: POST /compraComDesconto/10  body: { "valor": 200 }
    // Saída: { "valorFinal": 180 }
})


endpoints.get('/totalIngressos', (req, resp) => {
    let quantidade = Number(req.query.quantidade);
    let preco = Number(req.query.preco);

    let Total= quantidade * preco;

    resp.send({
        Total: Total
    })
    // TODO: calcular total dos ingressos
    // Entrada: GET /totalIngressos?quantidade=4&preco=50
    // Saída: { "total": 200 }
})

endpoints.post('/totalCarrinho', (req, resp) => {
    let corpo = req.body;
    let itens = corpo.itens;

    let soma = 0;

    for (let item of itens) {
        soma += item.preco;
    }

    resp.send({
        total: soma
    })

    // TODO: calcular total dos itens do carrinho
    // Entrada: POST /totalCarrinho  body: { "itens": [{ "nome": "Caneta", "preco": 2.5 }, { "nome": "Caderno", "preco": 15 }] }
    // Saída: { "total": 17.5 }
});



export default endpoints;
